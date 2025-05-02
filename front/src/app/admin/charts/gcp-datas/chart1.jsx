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
  const [gcpNameValue, setGcpNameValue] = useState([]);
  const [gcpParameter, setGcpParameter] = useState([]);

  const drawChart1 = (dataFilter, categories) => {
    setChartOptions({
      chart: {
        type: "area",
      },
      accessibility: {
        description: "",
      },
      title: {
        text: `${gcpParameter} نمودار پارامترهای جابجایی `,
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
      series: dataFilter,
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
        gcpName: e.gcpName,
        gcpX: e.gcpX,
        gcpY: e.gcpY,
        gcpZ: e.gcpZ,
        date: e.date,
        gcpHeight: e.gcpHeight,
        dDay: e.dDay,
        dx: e.dx,
        dxR: e.dxR,
        dxR1: e.dxR1,
        dy: e.dy,
        dyR: e.dyR,
        dyR1: e.dyR1,
        dz: e.dz,
        dzR: e.dzR,
        dzR1: e.dzR1,
        ds: e.ds,
        dsR: e.dsR,
        dsR1: e.dsR1,
        dt: e.dt,
        dtR: e.dtR,
        dtR1: e.dtR1,
        value: e[gcpParameter] || 0,
      });
    });

    const categories = [];

    const chartData = [];

    gcpNameValue.map((n) => {
      const fl = rows.filter(
        (e) => e.gcpName == n.label && e.hipName === hipName
      );
      fl.map((d) => categories.push(d.date));
      chartData.push({ name: n.label, data: fl.map((e) => e.value) });
    });

    if (chartData.length > 0) {
      setLoaded(true);
      drawChart1(chartData, categories);
    } else {
      setLoaded(false);
    }
  };

  const handleChangeGcp = (event) => {
    setGcpParameter(event.target.value);
  };

  // const gcps = [];
  // data.map(
  //   (g) => {
  //     gcps.push({
  //       id: g.id,
  //       label: g.gcpName,
  //     });
  //   }
  // );

  const gcps = [];
  const map = new Map();
  for (const item of data) {
    if (!map.has(item.gcpName)) {
      map.set(item.gcpName, true); // set any value to Map
      gcps.push({
        id: item.id,
        label: item.gcpName,
      });
    }
  }

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
                <MenuItem value={"hip1"}>هیپ 1</MenuItem>
                <MenuItem value={"hip2"}>هیپ 2</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Autocomplete
              multiple
              disablePortal
              options={gcps}
              // groupBy={(option) => option.label}
              // getOptionLabel={(option) => option.label}
              sx={{ width: "100%" }}
              defaultValue={gcpNameValue}
              onChange={(event, newValue) => {
                // let values = newValue.map(e =>  {return e})
                setGcpNameValue(newValue);
              }}
              renderInput={(params) => (
                <TextField {...params} label="نام ایستگاه" />
              )}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 3 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                پارامتر جابجایی
              </InputLabel>
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
