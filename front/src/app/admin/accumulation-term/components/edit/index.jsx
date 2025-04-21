"use client";

import { updateAccumulationTerm } from "../action/accumulation-term.api";
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

const debiUnitSelect = [
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

export default function EditAccumulationTerm({
  searchParams,
  accumulationTerm,
}) {
  const { errorMessage } = searchParams;

  return (
    <>
      <form
        className="grid gap-x-6 gap-y-10 mt-10 grid-cols-2 px-2"
        action={(formData) => updateAccumulationTerm(formData, accumulationTerm.id)}
      >
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="hipName"
              name="hipName"
              select
              label="نام هیپ"
              defaultValue={accumulationTerm.hipName}
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
            <TextField
              id="flowIn"
              name="flowIn"
              label="دبی ورودی"
              defaultValue={accumulationTerm.flowIn}
              variant="outlined"
              fullWidth={true}
              maxRows={4}
              required={true}
              color="primary"
              focused
            />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="flowUnitIn"
              name="flowUnitIn"
              select
              label="واحد دبی ورودی"
              defaultValue={accumulationTerm.flowUnitIn}
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
              {debiUnitSelect.map((option) => (
                <option key={option.value} value={option.label}>
                  {option.label}
                </option>
              ))}
            </TextField>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="flowOut"
              name="flowOut"
              label="دبی خروجی"
              defaultValue={accumulationTerm.flowOut}
              variant="outlined"
              fullWidth={true}
              required={true}
              maxRows={4}
              color="primary"
              focused
            />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="flowUnitOut"
              name="flowUnitOut"
              select
              label="واحد دبی خروجی"
              defaultValue={accumulationTerm.flowUnitOut}
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
              {debiUnitSelect.map((option) => (
                <option key={option.value} value={option.label}>
                  {option.label}
                </option>
              ))}
            </TextField>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="accumulationDate"
              name="accumulationDate"
              type="date"
              label=" تاریخ برداشت"
              defaultValue={accumulationTerm.accumulationDate}
              variant="outlined"
              required={true}
              fullWidth={true}
              maxRows={4}
              color="primary"
              focused
            />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="accumulationTerm"
              name="accumulationTerm"
              label="ترم انباشتگی"
              defaultValue={accumulationTerm.accumulationTerm}
              variant="outlined"
              fullWidth={true}
              required={true}
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
