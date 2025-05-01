"use client";

import React, { useState } from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import { FormControl, InputLabel, MenuItem } from "@mui/material";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

export default function AreaChart({ data }) {
  const [chartOptions, setChartOptions] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [hipName, setHipName] = useState([]);
  const [pizoValue, setPizoValue] = React.useState([]);

  const drawChart1 = (dataFilter) => {
    const dd = [];
    const result = [];
    const categories = [];

    dataFilter.map((d) => {
      categories.push(d.piezometerDate);
      dd.push(d.piezometerAcidLevel);
    });
    result.push({
      name: hipName,
      data: dd,
    });
    console.log("drawChart1.................", result);

    setChartOptions({
      chart: {
        type: "area",
      },
      accessibility: {
        description: "",
      },
      title: {
        text: "نمودار سطح اسید پیزومتر",
      },
      subtitle: {
        text: "",
      },
      xAxis: {
        categories: categories,
        title: {
          text: "Date",
        },
      },
      yAxis: {
        title: {
          text: "Value",
        },
        labels: {
          enabled: true,
          format: "{value}",
          style: {
            color: "#000",
            fontSize: "12px",
          },
        },
      },
      series: result,
    });
  };

  const handleChangeHip = (event) => {
    setHipName(event.target.value);
  };

  const handleDrawChart = async () => {
    const rows = [];

    data.map((e) => {
      rows.push({
        id: e.id,
        hipName: e.hipName,
        piezometerName: e.piezometerName,
        piezometerDate: e.piezometerDate,
        piezometerAcidLevel: e.piezometerAcidLevel,
        piezometerAcidLevelUnit: e.piezometerAcidLevelUnit,
      });
    });

    const fl = rows.filter(
      (e) => e.piezometerName == pizoValue && e.hipName === hipName
    );
    console.log("hipName.....................", hipName);
    console.log("fl.....................", fl);
    if (fl.length > 0) {
      setLoaded(true);
      drawChart1(fl);
    } else {
      setLoaded(false);
    }
  };

  const pizValArr = [];
  const map = new Map();
  for (const item of data) {
    if (!map.has(item.piezometerName)) {
      map.set(item.piezometerName, true); // set any value to Map
      pizValArr.push({
        id: item.id,
        piezometerName: item.piezometerName,
      });
    }
  }

  function handleInputChange(event, value) {
    setPizoValue(value);
  }
  console.log("pizoValue...................", pizoValue);

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
          <Grid size={{ xs: 12, md: 4 }}>
            <Autocomplete
              options={pizValArr}
              groupBy={(option) => option.piezometerName}
              getOptionLabel={(option) => option.piezometerName}
              sx={{ width: 300 }}
              onInputChange={handleInputChange}
              renderInput={(params) => (
                <TextField {...params} label="پیزومتر" />
              )}
            />
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
