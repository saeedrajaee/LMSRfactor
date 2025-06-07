"use client";

import { updateWellWaterLevel } from "../action/wellWaterLevel.api";
import Grid from '@mui/material/Grid';
import Button from "@mui/material/Button";
import * as React from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMomentJalaali } from "@mui/x-date-pickers/AdapterMomentJalaali";


const initialState = {
  success: "",
  error: {
    hipName: "",
    wellLevelDate: "",
    wellName: "",
    wellLevelHeight: "",
    wellLevelUnit: "",
  },
};

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

const unitSelect = [
  {
    value: "m",
    label: "متر",
  },
  {
    value: "cm",
    label: "سانتیمتر",
  },
];

export default function EditWellWaterLevel({
  searchParams,
  WellWaterLevel,
}) {
  const { errorMessage } = searchParams;

  return (
    <>
      <form
        className="grid gap-x-6 gap-y-10 mt-10 grid-cols-2 px-2"
        action={(formData) => updateWellWaterLevel(formData, WellWaterLevel.id)}
      >
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="hipName"
              name="hipName"
              select
              label="نام هیپ"
              defaultValue={WellWaterLevel.hipName}
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
                <option key={option.value} >
                  {option.label}
                </option>
              ))}
            </TextField>{" "}
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <LocalizationProvider dateAdapter={AdapterMomentJalaali}>
              <DatePicker
                label=" تاریخ برداشت"
                name="wellLevelDate"
                // value={value}
                onChange={(newValue) => setValue(newValue)}
              />
            </LocalizationProvider>
            {/* <TextField
              id="wellLevelDate"
              name="wellLevelDate"
              type="date"
              label=" تاریخ برداشت"
              defaultValue={WellWaterLevel.wellLevelDate}
              variant="outlined"
              fullWidth={true}
              maxRows={4}
              color="primary"
              focused
            /> */}
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="wellName"
              name="wellName"
              label="نام چاه"
              defaultValue={WellWaterLevel.wellName}
              variant="outlined"
              fullWidth={true}
              maxRows={4}
              color="primary"
              focused
            />
          </Grid>
		  
		            <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="wellLevelHeight"
              name="wellLevelHeight"
              label="عمق چاه"
              defaultValue={WellWaterLevel.wellLevelHeight}
              variant="outlined"
              fullWidth={true}
              maxRows={4}
              color="primary"
              focused
            />
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="wellLevelUnit"
              name="واحد"
              select
              label="واحد"
              defaultValue={WellWaterLevel.wellLevelUnit}
              variant="outlined"
              fullWidth={true}
              slotProps={{
                select: {
                  native: true,
                },
              }}
            >
              {unitSelect.map((option) => (
                <option key={option.value} value={option.label}>
                  {option.label}
                </option>
              ))}
            </TextField>
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
