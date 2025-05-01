"use client";

import { updatePls } from "../action/pls.api";
import Grid from "@mui/material/Grid2";
import Button from "@mui/material/Button";

import * as React from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

const initialState = {
  success: "",
  error: {
    hipName: "",
    plsDate: "",
    fe: "",
    feUnit: "",
    ph: "",
    phUnit: "",
    eh: "",
    ehUnit: "",
    ec: "",
    ecUnit: "",
    t: "",
    tUnit: "",
    tss: "",
    tssUnit: "",
    pb: "",
    pb: "",
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
    value: "mg",
    label: "میلیگرم در متر مکعب",
  },
  {
    value: "k",
    label: "کیلوگرم در متر مکعب",
  },
  {
    value: "t",
    label: "تن",
  },
];

export default function EditPls({
  searchParams,
  Pls,
}) {
  const { errorMessage } = searchParams;

  return (
    <>
      <form
        className="grid gap-x-6 gap-y-10 mt-10 grid-cols-2 px-2"
        action={(formData) => updatePls(formData, Pls.id)}
      >
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="hipName"
              name="hipName"
              select
              label="نام هیپ"
              defaultValue={Pls.hipName}
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
              id="plsDate"
              name="plsDate"
              type="date"
              label=" تاریخ برداشت"
              defaultValue={Pls.plsDate}
              variant="outlined"
              fullWidth={true}
              maxRows={4}
              color="primary"
              focused
            />
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="fe"
              name="fe"
              label="fe"
              defaultValue={Pls.fe}
              variant="outlined"
              fullWidth={true}
              maxRows={4}
              color="primary"
              focused
            />
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="feUnit"
              name="feUnit"
              select
              label="واحد"
              defaultValue={Pls.feUnit}
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

          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="ph"
              name="ph"
              label="ph"
              defaultValue={Pls.ph}
              variant="outlined"
              fullWidth={true}
              maxRows={4}
              color="primary"
              focused
            />
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="phUnit"
              name="phUnit"
              select
              label="واحد"
              defaultValue={Pls.phUnit}
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


          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="eh"
              name="eh"
              label="eh"
              defaultValue={Pls.eh}
              variant="outlined"
              fullWidth={true}
              maxRows={4}
              color="primary"
              focused
            />
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="ehUnit"
              name="ehUnit"
              select
              label="واحد"
              defaultValue={Pls.ehUnit}
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


          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="ec"
              name="ec"
              label="ec"
              defaultValue={Pls.ec}
              variant="outlined"
              fullWidth={true}
              maxRows={4}
              color="primary"
              focused
            />
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="ecUnit"
              name="ecUnit"
              select
              label="واحد"
              defaultValue={Pls.ecUnit}
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

          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="t"
              name="t"
              label="t"
              defaultValue={Pls.t}
              variant="outlined"
              fullWidth={true}
              maxRows={4}
              color="primary"
              focused
            />
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="tUnit"
              name="tUnit"
              select
              label="واحد"
              defaultValue={Pls.tUnit}
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

          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="tss"
              name="tss"
              label="tss"
              defaultValue={Pls.tss}
              variant="outlined"
              fullWidth={true}
              maxRows={4}
              color="primary"
              focused
            />
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="tssUnit"
              name="tssUnit"
              select
              label="واحد"
              defaultValue={Pls.tssUnit}
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

          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="pb"
              name="pb"
              label="pb"
              defaultValue={Pls.pb}
              variant="outlined"
              fullWidth={true}
              maxRows={4}
              color="primary"
              focused
            />
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="pbUnit"
              name="pbUnit"
              select
              label="واحد"
              defaultValue={Pls.pbUnit}
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
