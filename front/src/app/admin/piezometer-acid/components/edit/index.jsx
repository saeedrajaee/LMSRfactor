"use client";

import { updatePiezometerAcid } from "../action/piezometerAcid.api";
import Grid from '@mui/material/Grid';
import Button from "@mui/material/Button";
import * as React from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMomentJalaali } from "@mui/x-date-pickers/AdapterMomentJalaali";

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
    label: " اینچ",
  },
];

export default function EditPiezometerAcid({ searchParams, PiezometerAcid }) {
  const { errorMessage } = searchParams;

  return (
    <>
      <form
        className="grid gap-x-6 gap-y-10 mt-10 grid-cols-2 px-2"
        action={(formData) => updatePiezometerAcid(formData, PiezometerAcid.id)}
      >
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="hipName"
              name="hipName"
              select
              label="نام هیپ"
              defaultValue={PiezometerAcid.hipName}
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
              id="piezometerName"
              name="piezometerName"
              label="نام پیزومتر"
              defaultValue={PiezometerAcid.piezometerName}
              variant="outlined"
              fullWidth={true}
              maxRows={4}
              color="primary"
              focused
            />
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            
            <LocalizationProvider dateAdapter={AdapterMomentJalaali}>
              <DatePicker
                label=" تاریخ برداشت"
                name="piezometerDate7"
                // value={value}
                onChange={(newValue) => setValue(newValue)}
              />
            </LocalizationProvider>
            {/* <TextField
              id="piezometerDate"
              name="piezometerDate"
              type="date"
              label=" تاریخ برداشت"
              defaultValue={PiezometerAcid.piezometerDate}
              variant="outlined"
              fullWidth={true}
              maxRows={4}
              color="primary"
              focused
            /> */}
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="piezometerAcidLevel"
              name="piezometerAcidLevel"
              label="سطح اسید پیزومتر"
              defaultValue={PiezometerAcid.piezometerAcidLevel}
              variant="outlined"
              fullWidth={true}
              maxRows={4}
              color="primary"
              focused
            />
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="piezometerAcidLevelUnit"
              name="piezometerAcidLevelUnit"
              select
              label=" واحد سطح اسید پیزومتر"
              defaultValue={PiezometerAcid.piezometerAcidLevelUnit}
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
