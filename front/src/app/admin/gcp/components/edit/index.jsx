"use client";

import { updateGcp } from "../action/gcp.api";
import Grid from "@mui/material/Grid2";
import Button from "@mui/material/Button";

import * as React from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";


const hipSelect = [
  {
    value: "hip1",
    label: "هیپ 1",
  },
  {
    value: "hip2",
    label: "هیپ 2",
  },
];

export default function EditGcp({
  searchParams,
  Gcp,
}) {
  const { errorMessage } = searchParams;
          //    

  return (
    <>
      <form
        className="grid gap-x-6 gap-y-10 mt-10 grid-cols-2 px-2"
        action={(formData) => updateGcp(formData, Gcp.id)}
      >
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="hipName"
              name="hipName"
              select
              label="نام هیپ"
              defaultValue={Gcp.hipName}
              variant="outlined"
              fullWidth={true}
              required={true}
              slotProps={{
                select: {
                  native: true,
                },
              }}
              // helperText=" "
            >
              {hipSelect.map((option) => (
                <option key={option.value} value={option.label}>
                  {option.label}
                </option>
              ))}
            </TextField>{" "}

          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="gcpName"
              name="gcpName"
              label="نام ایستگاه"
			                defaultValue={Gcp.gcpName}
              variant="outlined"
              fullWidth={true}
              maxRows={4}
              color="primary"
              focused
            />

          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="gcpX"
              name="gcpX"
              label="X"
			  defaultValue={Gcp.gcpX}
              variant="outlined"
              fullWidth={true}
              maxRows={4}
              color="primary"
              focused
            />

          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="gcpY"
              name="gcpY"
              label="Y"
			  defaultValue={Gcp.gcpY}
              variant="outlined"
              fullWidth={true}
              maxRows={4}
              color="primary"
              focused
            />

          </Grid>
		  
		<Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="gcpZ"
              name="gcpZ"
              label="زون"
			  defaultValue={Gcp.gcpZ}
              variant="outlined"
              fullWidth={true}
              maxRows={4}
              color="primary"
              focused
            />

          </Grid>
		  
		<Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="date"
              name="date"
              label="تاریخ برداشت"
			  defaultValue={Gcp.date}
              variant="outlined"
              fullWidth={true}
              maxRows={4}
              color="primary"
              focused
            />

          </Grid>
		  
		  		<Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="gcpHeight"
              name="gcpHeight"
              label="ارتفاع ایستگاه"
			  defaultValue={Gcp.gcpHeight}
              variant="outlined"
              fullWidth={true}
              maxRows={4}
              color="primary"
              focused
            />

          </Grid>
		  
		  		  		<Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="dDay"
              name="dDay"
              label="روز سال"
			  defaultValue={Gcp.dDay}
              variant="outlined"
              fullWidth={true}
              maxRows={4}
              color="primary"
              focused
            />

          </Grid>
		  		  
		  		  		<Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="dx"
              name="dx"
              label="dx"
			  defaultValue={Gcp.dx}
              variant="outlined"
              fullWidth={true}
              maxRows={4}
              color="primary"
              focused
            />
  
          </Grid>
		  
		  		  		  
		  		  		<Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="dxR"
              name="dxR"
              label="dxR"
			  defaultValue={Gcp.dxR}
              variant="outlined"
              fullWidth={true}
              maxRows={4}
              color="primary"
              focused
            />

          </Grid>		  
		  		  		  
		  		  		<Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="dxR1"
              name="dxR1"
              label="معکوس dxR1"
			  defaultValue={Gcp.dxR1}
              variant="outlined"
              fullWidth={true}
              maxRows={4}
              color="primary"
              focused
            />

          </Grid>	

		  
		  		  		<Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="dy"
              name="dy"
              label="dy"
			  defaultValue={Gcp.dy}
              variant="outlined"
              fullWidth={true}
              maxRows={4}
              color="primary"
              focused
            />

          </Grid>
		  
<Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="dyR"
              name="dyR"
              label="dyR"
			  defaultValue={Gcp.dyR}
              variant="outlined"
              fullWidth={true}
              maxRows={4}
              color="primary"
              focused
            />
          </Grid>		  
		  
		  
		<Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="dyR1"
              name="dyR1"
              label="معکوس dyR1"
			  defaultValue={Gcp.dyR1}
              variant="outlined"
              fullWidth={true}
              maxRows={4}
              color="primary"
              focused
            />
          </Grid>
		  
		  	  		  
		<Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="dz"
              name="dz"
              label=" dz"
			  defaultValue={Gcp.dz}
              variant="outlined"
              fullWidth={true}
              maxRows={4}
              color="primary"
              focused
            />
           </Grid>
		  <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="dzR"
              name="dzR"
              label=" dzR"
			  defaultValue={Gcp.dzR}
              variant="outlined"
              fullWidth={true}
              maxRows={4}
              color="primary"
              focused
            />
          </Grid>
		  
		  		  
		  	  		  
		  		  		<Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="dzR1"
              name="dzR1"
              label=" معکوس dzR1"
			  defaultValue={Gcp.dzR1}
              variant="outlined"
              fullWidth={true}
              maxRows={4}
              color="primary"
              focused
            />
          </Grid>
		  	  
		  	  		  
		 <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="ds"
              name="ds"
              label="ds"
			  defaultValue={Gcp.ds}
              variant="outlined"
              fullWidth={true}
              maxRows={4}
              color="primary"
              focused
            />
          </Grid>	
		  	  		  
		 <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="dsR"
              name="dsR"
              label="dsR"
			  defaultValue={Gcp.dsR}
              variant="outlined"
              fullWidth={true}
              maxRows={4}
              color="primary"
              focused
            />

          </Grid>		  
		  		  
		  	  		  
		 <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="dsR1"
              name="dsR1"
              label="معکوس dsR1"
			  defaultValue={Gcp.dsR1}
              variant="outlined"
              fullWidth={true}
              maxRows={4}
              color="primary"
              focused
            />

          </Grid>		  
		  		  
		  	  		  
		 <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="dt"
              name="dt"
              label="dt"
			  defaultValue={Gcp.dt}
              variant="outlined"
              fullWidth={true}
              maxRows={4}
              color="primary"
              focused
            />

          </Grid>		  
		  		  
		  	  		  
		 <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="dtR"
              name="dtR"
              label="dtR"
			  defaultValue={Gcp.dtR}
              variant="outlined"
              fullWidth={true}
              maxRows={4}
              color="primary"
              focused
            />

          </Grid>		  
		  		  
		  	  		  
		 <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="dtR1"
              name="dtR1"
              label="معکوس dtR1"
			  defaultValue={Gcp.dtR1}
              variant="outlined"
              fullWidth={true}
              maxRows={4}
              color="primary"
              focused
            />
                      </Grid>
        </Grid>
        <Stack
          direction="row"
          spacing={5}
          sx={{ justifyContent: "end", marginTop: 5 }}
        >
          <Button variant="contained" type="submit" color="success">
            ذخیره
          </Button>
        </Stack>
      </form>
    </>
  );
}
