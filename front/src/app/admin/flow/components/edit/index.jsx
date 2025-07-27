"use client";

import { updateFlow } from "../action/flow.api";
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
    flowDataIntDate: "",
    flowRate: "",
    flowUnit: "",
    pad: "",
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

const flowSelect = [
  {
    value: "m3",
    label: "متر معکب",
  },
  {
    value: "cm3",
    label: "سانتیمتر مکعب",
  },
  {
    value: "litr",
    label: " لیتر",
  },
];

export default function EditFlow({
  searchParams,
  Flow,
}) {
  const { errorMessage } = searchParams;

  return (
    <>
      <form
        className="grid gap-x-6 gap-y-10 mt-10 grid-cols-2 px-2"
        action={(formData) => updateFlow(formData, Flow.id)}
      >
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="hipName"
              name="hipName"
              select
              label="نام هیپ"
              defaultValue={Flow.hipName}
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
            </TextField>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
                        <LocalizationProvider dateAdapter={AdapterMomentJalaali}>
              <DatePicker
                label=" تاریخ برداشت"
                name="accumulationDate"
                // value={value}
                onChange={(newValue) => setValue(newValue)}
              />
            </LocalizationProvider>
            {/* <TextField
              id="flowDataIntDate"
              name="flowDataIntDate"
              type="date"
              label=" تاریخ برداشت"
              defaultValue={Flow.flowDataIntDate}
              variant="outlined"
              fullWidth={true}
              maxRows={4}
              color="primary"
              focused
            /> */}
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="flowRate"
              name="flowRate"
              label="پاشش دبی"
              defaultValue={Flow.flowRate}
              variant="outlined"
              fullWidth={true}
              maxRows={4}
              color="primary"
              focused
            />
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="flowUnit"
              name="flowUnit"
              select
              label="واحد دبی پاشش "
              defaultValue={Flow.flowUnit}
              variant="outlined"
              fullWidth={true}
              slotProps={{
                select: {
                  native: true,
                },
              }}
              // helperText=" "
            >
              {flowSelect.map((option) => (
                <option key={option.value} value={option.label}>
                  {option.label}
                </option>
              ))}
            </TextField>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="pad"
              name="pad"
              label="نام پد "
              defaultValue={Flow.pad}
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
