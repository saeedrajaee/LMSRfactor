"use client";

import { createWellWaterLevel } from "../action/wellWaterLevel.api";
import { useActionState } from "react";
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

const AddWellWaterLevel = () => {
  const [state, action] = useActionState(createWellWaterLevel, initialState);

  return (
    <>
      <form
        className="grid gap-x-6 gap-y-10 mt-10 grid-cols-2 px-2"
        action={action}
      >
        <Grid container spacing={3}>
          {state?.success && (
            <p className="text-sm text-red-500">{state.success}</p>
          )}
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="hipName"
              name="hipName"
              select
              label="نام هیپ"
              defaultValue="hip1"
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
            <div>
              {state?.error?.hipName && (
                <p className="text-sm text-red-500">{state.error.hipName}</p>
              )}
            </div>
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
              variant="outlined"
              fullWidth={true}
              maxRows={4}
              color="primary"
              focused
            /> */}
            <div>
              {state?.error?.wellLevelDate && (
                <p className="text-sm text-red-500">
                  {state.error.wellLevelDate}
                </p>
              )}
            </div>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="wellName"
              name="wellName"
              label="wellName"
              variant="outlined"
              fullWidth={true}
              maxRows={4}
              color="primary"
              focused
            />
            <div>
              {state?.error?.wellName && (
                <p className="text-sm text-red-500">{state.error.wellName}</p>
              )}
            </div>
          </Grid>
		  
		  
		  <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="wellLevelHeight"
              name="wellLevelHeight"
              label="نام چاه"
              variant="outlined"
              fullWidth={true}
              maxRows={4}
              color="primary"
              focused
            />
            <div>
              {state?.error?.wellLevelHeight && (
                <p className="text-sm text-red-500">{state.error.wellLevelHeight}</p>
              )}
            </div>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="wellLevelUnit"
              name="wellLevelUnit"
              select
              label="واحد"
              defaultValue="m"
              variant="outlined"
              fullWidth={true}
              slotProps={{
                select: {
                  native: true,
                },
              }}
            >
              {unitSelect.map((option) => (
                <option key={option.value} >
                  {option.label}
                </option>
              ))}
            </TextField>
            <div>
              {state?.error?.wellLevelUnit && (
                <p className="text-sm text-red-500">
                  {state.error.wellLevelUnit}
                </p>
              )}
            </div>
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
};

export default AddWellWaterLevel;
