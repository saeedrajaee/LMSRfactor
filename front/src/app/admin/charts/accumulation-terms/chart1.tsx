'use client'

import React, {useState} from 'react';
import dynamic from 'next/dynamic';
import Highcharts from 'highcharts/highstock';
import {FormControl, InputLabel, MenuItem} from "@mui/material";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import {api} from "@/helpers/api1";
import moment from "moment-jalaali";
import Button from "@mui/material/Button";
moment().format('jYYYY/jM/jD')


const HighchartsReact = dynamic(() => import('highcharts-react-official'), { ssr: false });

interface AccumulationTerms{
    flowDataIntDate: string;
    flowIn: number;
    flowOut: number;
    id?: string,
    _id?: string,
    hipId: string
}

interface GetValues{
    hip?: string
}

export default function Chart2() {
    let values:GetValues = {};
    const getValues:string = localStorage.getItem("accumulation-terms") || '';
    if(getValues){
        values = JSON.parse(getValues)
    }

    const [chartOptions, setChartOptions] = useState({});
    const [chartOptions2, setChartOptions2] = useState({});
    const [hip, setHip] = React.useState(values?.hip ?? '');
    const [loaded, setLoaded] = React.useState(false);

    const drawChart1 = (data: AccumulationTerms[]) => {
        const result = [];
        const dd: number[] = []
        const categories: string[] = []

        data.map((d) => {
            categories.push(d.flowDataIntDate)
            dd.push(d.flowIn)


        })

        result.push({
            name: hip ,
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
                text: 'نمودار ترم انباشتگی - دبی ورودی'
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
                    text: 'Values'
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

    const drawChart2 = (data: AccumulationTerms[]) => {
        const result = [];
        const dd: number[] = []
        const categories: string[] = []

        data.map((d) => {
            categories.push(d.flowDataIntDate)
            dd.push(d.flowOut)
        })

        result.push({
            name: hip ,
            data: dd
        })

        setChartOptions2({
            chart: {
                type: 'area'
            },
            accessibility: {
                description: ''
            },
            title: {
                text: 'نمودار ترم انباشتگی - دبی خروجی'
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
                    text: 'Values'
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
        localStorage.setItem("accumulation-terms",JSON.stringify({hip: hip}))

        const res = await api.get("/accumulationTerm");
        if(res?.status === 200 && res?.data){
            const rows:AccumulationTerms[] = []

            res.data.map((e:AccumulationTerms) => {
                rows.push({
                    id: e._id,
                    flowDataIntDate: e.flowDataIntDate,
                    flowIn: e.flowIn,
                    flowOut: e.flowOut,
                    hipId: e.hipId
                })
            })




            const fl: AccumulationTerms[] = rows.filter(e => e.hipId === hip)

            if(fl.length > 0){
                setLoaded(true)
                drawChart1(fl)
                drawChart2(fl)
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

            {loaded && <HighchartsReact
                highcharts={Highcharts}
                options={chartOptions2}
            />}
        </Box>
    );
}
