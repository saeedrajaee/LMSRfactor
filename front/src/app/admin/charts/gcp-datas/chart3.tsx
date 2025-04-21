'use client'

import React, {useEffect, useState} from 'react';
import dynamic from 'next/dynamic';
import Highcharts from 'highcharts/highstock';
import {Autocomplete, FormControl, InputLabel, MenuItem} from "@mui/material";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import {api} from "@/helpers/api1";
import moment from "moment-jalaali";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
moment().format('jYYYY/jM/jD')


const HighchartsReact = dynamic(() => import('highcharts-react-official'), { ssr: false });

interface Gcp{
    _id?: string;
    gcpName: string;
}

interface Gcps {
    id?: string;
    label: string;
}

interface GcpData{
    id?: string;
    _id?: string;
    date: string;
    gcpHeight: number;
    gcpName: string;
    hipId: string;
}

interface GcpData1{
    id?: string;
    _id?: string;
    date: number;
    gcpHeight: number;
    gcpName: string;
    hipId: string;
}

interface GetValues{
    hip?: string;
    gcpName?: Gcps[]
}

export default function Chart1() {

    let values:GetValues = {};
    const getValues:string = localStorage.getItem("gcp-datas") || '';
    if(getValues){
        values = JSON.parse(getValues)
    }

    const [chartOptions, setChartOptions] = useState({});
    const [gcpName, setGcpName] = useState<Gcps[]>([]);
    const [gcpNameValue, setGcpNameValue] = useState<Gcps[]>(values?.gcpName ?? []);
    const [hip, setHip] = React.useState(values?.hip ?? '');
    const [loaded, setLoaded] = React.useState(false);




    const convertPersianToEnglishNumber = (persianNumber: string) => {
        const persianDigits = '۰۱۲۳۴۵۶۷۸۹';
        const englishDigits = '0123456789';

        return persianNumber
            .toString()
            .split('')
            .map(char => {
                const index = persianDigits.indexOf(char);
                return index === -1 ? char : englishDigits[index];
            })
            .join('');
    }

    const fetchData = async () => {
        const gcps: Gcps[] = [];
        const res = await api.get("/gcps");
        res.data.map((g: Gcp) => {
            gcps.push({
                id: g._id,
                label: g.gcpName
            })
        })

        setGcpName(gcps)


    };

    useEffect(() => {
        fetchData();
    }, []);

    const excelDateToJSDate = (excelDate: number) => {
        const jsDate = new Date((excelDate - 25569) * 86400 * 1000);
        return jsDate;
    }

    const drawChart = (data: {name: string; data: number[]}[], categories:string[]) => {

        setChartOptions({
            chart: {
                type: 'area',
                zoomType: 'x'
            },
            accessibility: {
                description: ''
            },
            title: {
                text: 'نمودار نرخ جابجایی'
            },
            subtitle: {
                text: ''
            },
            xAxis: {
                categories: categories,
                title: {
                    text: 'Date'
                }
            },
            yAxis: {
                title: {
                    text: 'Height'
                },
                labels: {
                    enabled: true,
                    format: '{value}',
                    style: {
                        color: '#000',
                        fontSize: '12px'
                    }
                }
            },
            series: data
        });
    }

    const handleChangeHip = (event: SelectChangeEvent) => {
        setHip(event.target.value as string);
    };

    const handleDrawChart = async () => {

        localStorage.setItem("gcp-datas",JSON.stringify({hip: hip, gcpName: gcpNameValue}))

        const res = await api.get("/gcpDatas");
        if(res?.status === 200 && res?.data){
            const rows:GcpData[] = []

            res.data.map((e:GcpData1) => {
                rows.push({
                    id: e._id,
                    date: convertPersianToEnglishNumber(moment(excelDateToJSDate(e.date)).format('jYYYY/jMM/jDD')),
                    gcpHeight: e.gcpHeight,
                    gcpName: e.gcpName,
                    hipId: e.hipId
                })
            })

            const categories: string[] = []

            const chartData: {name: string; data: number[]}[] = [];
            gcpNameValue.map(n => {
                const fl:GcpData[] = rows.filter(e => e.gcpName == n.label && e.hipId === hip);
                fl.map(d =>  categories.push(d.date))
                chartData.push({name: n.label, data: fl.map(e => e.gcpHeight)})


            })




            if(chartData.length > 0){
                setLoaded(true)
                drawChart(chartData,categories)
            }
            else{
                setLoaded(false)
            }



        }
    }

    return (
        <Box>
            <Grid container spacing={3} sx={{marginBottom: 4}}>
                <Grid size={{ xs: 12, md: 4 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">هیپ</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            value={hip}
                            label="هیپ"
                            onChange={handleChangeHip}
                        >
                            <MenuItem value={'هیپ 1'}>هیپ 1</MenuItem>
                            <MenuItem value={'هیپ 2'}>هیپ 2</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                    <Autocomplete
                        multiple
                        disablePortal
                        options={gcpName}
                        sx={{ width: '100%' }}
                        defaultValue={gcpNameValue}
                        onChange={(event: React.SyntheticEvent<Element, Event>, newValue: Gcps[]) => {
                            // let values = newValue.map(e =>  {return e})
                            setGcpNameValue(newValue)
                        }}
                        renderInput={(params) => <TextField {...params} label="نام ایستگاه" />}
                    />
                </Grid>
                <Button variant="outlined" onClick={() => handleDrawChart()}>ترسیم</Button>
            </Grid>
            {!loaded &&
                <Grid
                    sx={{
                        padding: 5,
                        backgroundColor: '#eeeeee',
                        textAlign: 'center',
                        fontWeight: 'bold'
                    }}
                >
                    داده ای یافت نشد!
                </Grid>}
            {loaded && <HighchartsReact
                highcharts={Highcharts}
                options={chartOptions}
            />}
        </Box>
    );
}
