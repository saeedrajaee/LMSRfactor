'use client'

import React, {useState} from 'react';
import dynamic from 'next/dynamic';
import Highcharts from 'highcharts/highstock';
import {FormControl, InputLabel, MenuItem} from "@mui/material";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import Box from "@mui/material/Box";
import {api} from "@/helpers/api1";
import moment from "moment-jalaali";
import Button from "@mui/material/Button";
moment().format('jYYYY/jM/jD')


const HighchartsReact = dynamic(() => import('highcharts-react-official'), { ssr: false });

interface PLS{
    id?: string;
    _id?: string;
    plsDate: string;
    fe: number;
    hipId: string
}

interface GetValues{
    hip?: string
}

export default function Chart4() {
    let values:GetValues = {};
    const getValues:string = localStorage.getItem("pls") || '';
    if(getValues){
        values = JSON.parse(getValues)
    }

    const [chartOptions, setChartOptions] = useState({});
    const [hip, setHip] = React.useState(values?.hip ?? '');
    const [loaded, setLoaded] = React.useState(false);

    const drawChart = (data: PLS[]) => {
        const result = [];
        const dd: number[] = []
        const categories: string[] = []

        data.map((d) => {
            categories.push(d.plsDate)
            dd.push(d.fe)


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
                text: 'نمودار پارامترهای شیمیایی'
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
        localStorage.setItem("pls",JSON.stringify({hip: hip}))

        const res = await api.get("/pls");
        if(res?.status === 200 && res?.data){
            const rows:PLS[] = []

            res.data.map((e:PLS) => {
                rows.push({
                    id: e._id,
                    plsDate: e.plsDate,
                    fe: e.fe,
                    hipId: e.hipId
                })
            })




            const fl: PLS[] = rows.filter(e => e.fe && e.hipId === hip)

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
