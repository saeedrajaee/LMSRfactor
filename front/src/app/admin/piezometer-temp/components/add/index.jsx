"use client";

import { createPiezometerTemp } from "../action/piezometerTemp.api";
import { useActionState } from "react";
import Grid from "@mui/material/Grid2";
import Button from "@mui/material/Button";
import * as React from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

const initialState = {
  success: "",
  error: {
    hipName: "",
    piezometerName: "",
    piezometerDate: "",
    piezometerTempLevel: "",
    piezometerTempLevelUnit: "",
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

const AddPiezometerTemp = () => {
  const [state, action] = useActionState(createPiezometerTemp, initialState);

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
                <option key={option.value} value={option.value}>
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
            <TextField
              id="piezometerTempDate"
              name="piezometerTempDate"
              type="date"
              label=" تاریخ برداشت"
              variant="outlined"
              fullWidth={true}
              maxRows={4}
              color="primary"
              focused
            />
            <div>
              {state?.error?.piezometerTempDate && (
                <p className="text-sm text-red-500">
                  {state.error.piezometerTempDate}
                </p>
              )}
            </div>
          </Grid>
          
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="piezometerTemp"
              name="piezometerTemp"
              label="میزان دما"
              variant="outlined"
              fullWidth={true}
              maxRows={4}
              color="primary"
              focused
            />
            <div>
              {state?.error?.piezometerTemp && (
                <p className="text-sm text-red-500">{state.error.piezometerTemp}</p>
              )}
            </div>
          </Grid>

          
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="tempUnit"
              name="tempUnit"
              select
              label="واحد اندازه گیری دما"
              defaultValue="c"
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
            <div>
              {state?.error?.tempUnit && (
                <p className="text-sm text-red-500">
                  {state.error.tempUnit}
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

export default AddPiezometerTemp;
