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
  const [loaded, setLoaded] = useState(false);
  const [hipName, setHipName] = useState([]);

  const drawChart = (dataFilter) => {
    const dd = [];
    const result = [];
    const categories = [];

    dataFilter.map((d) => {
      categories.push(d.copConDate);
      dd.push(d.copCon);
    });

    result.push({
      name: hipName,
      data: dd,
    });

    setChartOptions({
      title: {
        text: "غلظت مس",
      },

      chart: {
        type: "area",
        backgroundColor: "white",
        plotBorderWidth: null,
        plotShadow: false,
        borderWidth: 0,
        plotBorderWidth: 0,
        zoomType: "xy",
        panKey: "ctrl",
        panning: true,
        followTouchMove: false,
      },
      xAxis: {
        categories: categories,
        crosshair: true,
      },
      yAxis: {
        title: {
          text: "سانتیمتر مکعب",
        },
        labels: {
          enabled: true,
          format: `{value}  cm3`,
          style: {
            color: "#000",
            fontSize: "12px",
          },
        },
      },
      legend: {
        enabled: false,
      },
      tooltip: {
        headerFormat: "<b>{category}</b><br/>",
        pointFormat: "{series.name}: {point.y}<br/>{point.stackTotal}",
      },
      navigation: {
        buttonOptions: {
          align: "right",
          verticalAlign: "top",
        },
      },
      plotOptions: {
        area: {
            pointStart: 1940,
            marker: {
                enabled: false,
                symbol: 'circle',
                radius: 2,
                states: {
                    hover: {
                        enabled: true
                    }
                }
            }
        }
    },
      exporting: {
        enabled: true,
      },
      series: result,
    });
  };

  const handleChangeHip = (event) => {
    setHipName(event.target.value);
  };

  const handleDrawChart = async () => {
    const rows1 = [];

    data.map((e) => {
      rows1.push({
        id: e.id,
        copConDate: e.copConDate,
        copCon: e.copCon,
        hipName: e.hipName,
      });
    });
    const fl = rows1.filter((e) => e.copCon && e.hipName === hipName);
    if (fl.length > 0) {
      setLoaded(true);
      drawChart(fl);
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
        {!loaded && (
          <Grid
            sx={{
              padding: 5,
              backgroundColor: "#eeeeee",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            داده ای یافت نشد!
          </Grid>
        )}
        {loaded && (
          <HighchartsReact highcharts={Highcharts} options={chartOptions} />
        )}
      </Box>
      <hr />
    </div>
  );
}
