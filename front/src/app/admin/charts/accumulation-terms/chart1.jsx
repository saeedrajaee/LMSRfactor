"use client";

import React, { useState } from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import { FormControl, InputLabel, MenuItem } from "@mui/material";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";

export default function AreaChart({ data }) {
  const [chartOptions, setChartOptions] = useState({});
  const [chartOptions2, setChartOptions2] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [hipName, setHipName] = useState([]);

  const drawChart1 = (dataFilter) => {

    console.log("dataFilter...................",dataFilter)
    const dd = [];
    const result = [];
    const categories = [];

    dataFilter.map((d) => {
      categories.push(d.accumulationDate);
      dd.push(d.flowIn);
    });
    result.push({
      name: hipName,
      data: dd,
    });
    console.log("drawChart1.................",result)

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

  const drawChart2 = (dataFilter) => {
    const dd = [];
    const result = [];
    const categories = [];

    dataFilter.map((d) => {
      categories.push(d.accumulationDate);
      dd.push(d.flowOut);
    });


    result.push({
      name: hipName,
      data: dd,
    });


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

  const handleChangeHip = (event) => {
    setHipName(event.target.value);
  };

  const handleDrawChart = async () => {
    const rows = [];

    data.map((e) => {
      rows.push({
        id: e.id,
        accumulationDate: e.accumulationDate,
        hipName: e.hipName,
        flowIn: e.flowIn,
        flowOut: e.flowOut,
      });
    });
    console.log("data.....................", data)
    console.log("rows.....................", rows)


    const fl = rows.filter((e) => e.flowIn && e.hipName === hipName);
    console.log("fl.....................", fl)
    if (fl.length > 0) {
      setLoaded(true);
      drawChart1(fl);
      drawChart2(fl);
    } else {
      setLoaded(false);
    }
  };

  return (
    <div>
      <Box>
        <Grid container spacing={3} sx={{ marginBottom: 4 }}>
          <Grid size={{ xs: 12, md: 4 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">انتخاب هیپ</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                value={hipName}
                label="هیپ 1"
                onChange={handleChangeHip}
              >
                <MenuItem value={"هیپ 1"}>هیپ 1</MenuItem>
                <MenuItem value={"هیپ 2"}>هیپ 2</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Button variant="outlined" onClick={handleDrawChart}>
            ترسیم
          </Button>
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
      <hr />
    </div>
  );
}
