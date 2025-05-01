'use client'

import React, {useEffect, useState} from 'react';
import dynamic from 'next/dynamic';
import Highcharts from 'highcharts/highstock';
import {Autocomplete, FormControl, InputLabel, MenuItem} from "@mui/material";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import moment from "moment-jalaali";
import {api} from "@/helpers/api1";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
moment().format('jYYYY/jM/jD')


const HighchartsReact = dynamic(() => import('highcharts-react-official'), { ssr: false });

interface Gcp{
    _id?: string;
    gcpName: string;
    value: number;
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
    value: number;
}

interface GcpData1{
    id?: string;
    _id?: string;
    date: string;
    gcpHeight: number;
    gcpName: string;
    hipId: string;
    value: number;
    [key: string]: string | number | undefined;
    dx?: number;
    dy?: number;
    dz?: number;
    ds?: number;
    dt?: number;
    dxR?: number;
    dyR?: number;
    dzR?: number;
    dsR?: number;
    dtR?: number;
    "1/dxR"?: number;
    "1/dyR"?: number;
    "1/dzR"?: number;
    "1/dsR"?: number;
    "1/dtR"?: number;
}

interface GetValues{
    hip?: string;
    gcpName?: Gcps[],
    gcpParameter?: string;
}

export default function Chart1() {

    let values:GetValues = {};
    const getValues:string = localStorage.getItem("gcp-datas") || '';
    if(getValues){
        values = JSON.parse(getValues)
    }

    const [chartOptions, setChartOptions] = useState({});
    const [gcpParameter, setGcpParameter] = useState<string>(values?.gcpParameter ?? '');
    const [gcpName, setGcpName] = useState<Gcps[]>([]);
    const [gcpNameValue, setGcpNameValue] = useState<Gcps[]>(values?.gcpName ?? []);
    const [hip, setHip] = React.useState(values?.hip ?? '');
    const [loaded, setLoaded] = React.useState(false);


    const fetchData = async () => {
        const gcps: Gcps[] = [];
        const res = await api.get("/api/gcps");
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
                    text: 'جابجایی (cm)'
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
        localStorage.setItem("gcp-datas",JSON.stringify({hip: hip, gcpName: gcpNameValue, gcpParameter: gcpParameter}))

        const res = await api.get("/api/gcpDatas");
        if(res?.status === 200 && res?.data){
            const rows:GcpData[] = []

            res.data.map((e:GcpData1) => {
                rows.push({
                    id: e._id,
                    date: e.date,
                    gcpHeight: e.gcpHeight,
                    value: e[gcpParameter] as number || 0,
                    gcpName: e.gcpName,
                    hipId: e.hipId
                })
            })

            const categories: string[] = []

            const chartData: {name: string; data: number[]}[] = [];
            gcpNameValue.map(n => {
                const fl:GcpData[] = rows.filter(e => e.gcpName == n.label && e.hipId === hip);
                fl.map(d =>  categories.push(d.date))
                chartData.push({name: n.label, data: fl.map(e => e.value)})
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

    const handleChangeGcp = (event: SelectChangeEvent) => {
        setGcpParameter(event.target.value as string)
    }
    return (
        <Box>
            <Grid container spacing={3} sx={{marginBottom: 4}}>
                <Grid size={{ xs: 12, md: 3 }}>
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


                <Grid size={{ xs: 12, md: 3 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">پارامتر جابجایی</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            value={gcpParameter}
                            label="پارامتر جابجایی"
                            onChange={handleChangeGcp}
                        >
                            <MenuItem value="dx">dx</MenuItem>
                            <MenuItem value="dy">dy</MenuItem>
                            <MenuItem value="dz">dz</MenuItem>
                            <MenuItem value="ds">ds</MenuItem>
                            <MenuItem value="dt">dt</MenuItem>
                            <MenuItem value="dxR">dxR</MenuItem>
                            <MenuItem value="1/dxR">1/dxR</MenuItem>
                            <MenuItem value="dyR">dyR</MenuItem>
                            <MenuItem value="1/dyR">1/dyR</MenuItem>
                            <MenuItem value="dzR">dzR</MenuItem>
                            <MenuItem value="1/dzR">1/dzR</MenuItem>
                            <MenuItem value="dsR">dsR</MenuItem>
                            <MenuItem value="1/dsR">1/dsR</MenuItem>
                            <MenuItem value="dtR">dtR</MenuItem>
                            <MenuItem value="1/dtR">1/dtR</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid>
                    <Button sx={{height: 55}} variant="outlined" onClick={() => handleDrawChart()}>ترسیم</Button>
                </Grid>
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
