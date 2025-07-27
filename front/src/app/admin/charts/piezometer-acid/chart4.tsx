'use client'

import React, {useEffect, useState} from 'react';
import dynamic from 'next/dynamic';
import Highcharts from 'highcharts/highstock';
import {Autocomplete, FormControl, InputLabel, MenuItem} from "@mui/material";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import Box from "@mui/material/Box";
import {api} from "@/helpers/api1";
import moment from "moment-jalaali";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
moment().format('jYYYY/jM/jD')


const HighchartsReact = dynamic(() => import('highcharts-react-official'), { ssr: false });

interface PiezometerAcid{
    _id?: string;
    id?: string;
    piezometerCode?: string;
    piezometerAcidLevel: number;
    piezometerDate: string;
    piezometerId: string;
    hipId?: string;
}

interface Piezometer {
    id?: string;
    label?: string;
}

interface GetValues{
    hip?: string;
    piezometer?: Piezometer
}

export default function Chart3() {

    let values:GetValues = {};
    const getValues:string = localStorage.getItem("piezometer-acid") || '';
    if(getValues){
        values = JSON.parse(getValues)
    }

    const [chartOptions, setChartOptions] = useState({});
    const [gcpName, setGcpName] = useState<Piezometer[]>([]);
    const [gcpNameValue, setGcpNameValue] = useState<Piezometer>(values?.piezometer ?? {});
    const [hip, setHip] = React.useState(values?.hip ?? '');
    const [loaded, setLoaded] = React.useState(false);


    const fetchData = async () => {
        const piezometers: Piezometer[] = [];
        const res = await api.get("/piezometer");
        res.data.map((g: PiezometerAcid) => {
            piezometers.push({
                id: g.piezometerCode,
                label: g.piezometerCode
            })
        })

        setGcpName(piezometers)


    };

    useEffect(() => {
        fetchData();
    }, []);

    const drawChart = (data: PiezometerAcid[]) => {
        const result = [];
        const dd: number[] = []
        const categories: string[] = []

        data.map((d) => {
            categories.push(d.piezometerDate)
            dd.push(d.piezometerAcidLevel)


        })

        result.push({
            name: gcpNameValue ,
            data: dd
        })

        setChartOptions({
            chart: {
                type: 'area'
            },
            accessibility: {
                description: ''
            },
            title: {
                text: 'نمودار سطح اسید پیزومتر'
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
                    text: 'Value'
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
            series: result
        });
    }

    const handleChangeHip = (event: SelectChangeEvent) => {
        setHip(event.target.value as string);
    };

    const handleDrawChart = async () => {
        localStorage.setItem("piezometer-acid",JSON.stringify({hip: hip, piezometer: gcpNameValue}))

        const res = await api.get("/api/piezometerAcid");
        if(res?.status === 200 && res?.data){
            const rows:PiezometerAcid[] = []

            res.data.map((e:PiezometerAcid) => {
                rows.push({
                    id: e._id,
                    piezometerDate: e.piezometerDate,
                    piezometerAcidLevel: e.piezometerAcidLevel,
                    piezometerId: e.piezometerId,
                    hipId: e.hipId
                })
            })

            console.log(22,gcpNameValue)

            const fl: PiezometerAcid[] = rows.filter(e => e.piezometerId == gcpNameValue.label && e.hipId === hip)

            if(fl.length > 0){
                setLoaded(true)
                drawChart(fl)
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
                            <MenuItem value={'H1'}>هیپ 1</MenuItem>
                            <MenuItem value={'H2'}>هیپ 2</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                    <Autocomplete
                        disablePortal
                        options={gcpName}
                        defaultValue={Object.keys(gcpNameValue).length === 0 ? null : gcpNameValue}
                        sx={{ width: '100%' }}
                        onChange={(event: React.SyntheticEvent, newValue: Piezometer | null) => {
                            if(newValue)
                                setGcpNameValue(newValue)
                        }}
                        renderInput={(params) => <TextField {...params} label="پیزومتر" />}
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
