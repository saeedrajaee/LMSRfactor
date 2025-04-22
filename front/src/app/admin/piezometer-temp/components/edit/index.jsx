"use client";

import { updatePiezometerTemp } from "../action/piezometerTemp.api";
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

const tempSelect = [
  {
    value: "c",
    label: "درجه سلسیوس ",
  },
  {
    value: "k",
    label: "درجه کلوین ",
  },
  {
    value: "f",
    label: "فارنهایت",
  },
];

export default function EditPiezometerTemp({ searchParams, PiezometerTemp }) {
  const { errorMessage } = searchParams;

  return (
    <>
      <form
        className="grid gap-x-6 gap-y-10 mt-10 grid-cols-2 px-2"
        action={(formData) => updatePiezometerTemp(formData, PiezometerTemp.id)}
      >
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="hipName"
              name="hipName"
              select
              label="نام هیپ"
              defaultValue={PiezometerTemp.hipName}
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
                <option key={option.value} value={option.value}>
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
              defaultValue={PiezometerTemp.piezometerName}
              variant="outlined"
              fullWidth={true}
              maxRows={4}
              color="primary"
              focused
            />
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="piezometerTempDate"
              name="piezometerTempDate"
              type="date"
              label=" تاریخ برداشت"
              defaultValue={PiezometerTemp.piezometerTempDate}
              variant="outlined"
              fullWidth={true}
              maxRows={4}
              color="primary"
              focused
            />
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="piezometerTemp"
              name="piezometerTemp"
              label="میزان دما"
              defaultValue={PiezometerTemp.piezometerTemp}
              variant="outlined"
              fullWidth={true}
              maxRows={4}
              color="primary"
              focused
            />
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="tempUnit"
              name="tempUnit"
              select
              label="واحد اندازه گیری دما"
              defaultValue={PiezometerTemp.tempUnit}
              variant="outlined"
              fullWidth={true}
              slotProps={{
                select: {
                  native: true,
                },
              }}
            >
              {tempSelect.map((option) => (
                <option key={option.value} value={option.value}>
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
