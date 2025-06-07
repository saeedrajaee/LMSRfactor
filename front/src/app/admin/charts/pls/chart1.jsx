"use client";

import React, { useState } from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import Grid from '@mui/material/Grid';
import Box from "@mui/material/Box";
import { FormControl, InputLabel, MenuItem } from "@mui/material";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useRouter } from "next/navigation";



const optionsPls = ['fe', 'ph', 'eh', 'ec', 't', 'tss', 'pb'];

export default function AreaChart({ data }) {
  const [chartOptions, setChartOptions] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [hipName, setHipName] = useState([]);
  const [plcValue, setPlcValue] = React.useState([]);
  const router = useRouter();
  
  console.log("111111111111...................", data);
  
  const drawChart1 = (dataFilter) => {
    console.log("dataFilter...................", dataFilter)
    const dd = [];
    const result = [];
    const categories = [];

    dataFilter.map((d) => {
      categories.push(d.plsDate);


      if (dataFilter =="fe") {
        dd.push(d.fe);
      }
      else if(dataFilter =="ph"){
        dd.push(d.ph);
      }
      else if(dataFilter =="eh"){
        dd.push(d.eh);
      }
      else if(dataFilter =="ec"){
        dd.push(d.ec);
      }
      else if(dataFilter =="t"){
        dd.push(d.t);
      }
      else if(dataFilter =="tss"){
        dd.push(d.tss);
      }
      else{
        dd.push(d.pb);
      }
    });

    result.push({
      name: hipName,
      data: dd,
    });
    console.log("drawChart1.................", result)

    setChartOptions({
      chart: {
        type: 'area'
      },
      accessibility: {
        description: ''
      },
      title: {
        text: `نمودار پارامترهای شیمیایی ${plcValue}`
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

  const handleChangeHip = (event) => {
    setHipName(event.target.value);
  };

  const handleDrawChart = async () => {
    const rows = [];

    data.map((e) => {
      rows.push({
        id: e.id,
        hipName: e.hipName,
        plsDate: e.plsDate,
        fe: e.fe,
        ph: e.ph,
        eh: e.eh,
        ec: e.ec,
        t: e.t,
        tss: e.tss,
        pb: e.pb
      });
    });
    console.log("data.....................", data)
    console.log("rows.....................", rows)


    const fl = rows.filter((e) => e.plsDate && e.hipName === hipName);
    console.log("fl.....................", fl)
    if (fl.length > 0) {
      setLoaded(true);
      drawChart1(fl);

    } else {
      setLoaded(false);
    }
    
  };


  function handleInputChange(event, value) {
    setPlcValue(value);
  }


  // const handleReload = () => {
  //   router.reload();
  //   console.log("handleReload...................");
  // };
 
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
              options={optionsPls}
              getOptionLabel={(option) => option}
              // onChange={handleReload}
              sx={{ width: 300 }}
              onInputChange={handleInputChange}
              renderInput={(params) => (
                <TextField {...params} label="پیزومتر" />
              )}
            />
          </Grid>
          {"    "}
          <Button variant="outlined" onClick={handleDrawChart} >
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
      </Box>
      <hr />
    </div>
  );
}
