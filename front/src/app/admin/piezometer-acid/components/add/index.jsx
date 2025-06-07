"use client";

import { createPiezometerAcid } from "../action/piezometerAcid.api";
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
    piezometerName: "",
    piezometerDate: "",
    piezometerAcidLevel: "",
    piezometerAcidLevelUnit: "",
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

const acidLevelSelect = [
  {
    value: "m",
    label: "متر ",
  },
  {
    value: "cm",
    label: "سانتیمتر ",
  },
  {
    value: "inch",
    label: "اینچ",
  },
];

const AddPiezometerAcid = () => {
  const [state, action] = useActionState(createPiezometerAcid, initialState);

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
                <option key={option.value} value={option.label}>
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
            <TextField
              id="piezometerName"
              name="piezometerName"
              label="نام پیزومتر"
              variant="outlined"
              fullWidth={true}
              maxRows={4}
              color="primary"
              focused
            />
            <div>
              {state?.error?.piezometerName && (
                <p className="text-sm text-red-500">{state.error.piezometerName}</p>
              )}
            </div>
          </Grid>


          <Grid size={{ xs: 12, md: 4 }}>
             <LocalizationProvider dateAdapter={AdapterMomentJalaali}>
              <DatePicker
                label=" تاریخ برداشت"
                name="piezometerDate"
                // value={value}
                onChange={(newValue) => setValue(newValue)}
              />
            </LocalizationProvider>           
            {/* <TextField
              id="piezometerDate"
              name="piezometerDate"
              type="date"
              label=" تاریخ برداشت"
              variant="outlined"
              fullWidth={true}
              maxRows={4}
              color="primary"
              focused
            /> */}
            <div>
              {state?.error?.piezometerDate && (
                <p className="text-sm text-red-500">
                  {state.error.piezometerDate}
                </p>
              )}
            </div>
          </Grid>
          
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="piezometerAcidLevel"
              name="piezometerAcidLevel"
              label="سطح اسید پیزومتر"
              variant="outlined"
              fullWidth={true}
              maxRows={4}
              color="primary"
              focused
            />
            <div>
              {state?.error?.piezometerAcidLevel && (
                <p className="text-sm text-red-500">{state.error.piezometerAcidLevel}</p>
              )}
            </div>
          </Grid>

          
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="piezometerAcidLevelUnit"
              name="piezometerAcidLevelUnit"
              select
              label=" واحد سطح اسید پیزومتر"
              defaultValue="m"
              variant="outlined"
              fullWidth={true}
              slotProps={{
                select: {
                  native: true,
                },
              }}
            >
              {acidLevelSelect.map((option) => (
                <option key={option.value} value={option.label}>
                  {option.label}
                </option>
              ))}
            </TextField>
            <div>
              {state?.error?.piezometerAcidLevelUnit && (
                <p className="text-sm text-red-500">
                  {state.error.piezometerAcidLevelUnit}
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

export default AddPiezometerAcid;
