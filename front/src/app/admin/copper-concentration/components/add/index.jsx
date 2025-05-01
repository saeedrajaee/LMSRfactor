"use client";

import { createCopperConcentration } from "../action/copperConcentration.api";
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
    copConDate: "",
    copCon: "",
    copConUnit: "",
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

const copConUnitSelect = [
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

const AddCopperConcentration = () => {
  const [state, action] = useActionState(createCopperConcentration, initialState);

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
              id="copConDate"
              name="copConDate"
              type="date"
              label=" تاریخ برداشت"
              variant="outlined"
              fullWidth={true}
              maxRows={4}
              color="primary"
              focused
            />
            <div>
              {state?.error?.copConDate && (
                <p className="text-sm text-red-500">
                  {state.error.copConDate}
                </p>
              )}
            </div>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="copCon"
              name="copCon"
              label="غلظت مس"
              variant="outlined"
              fullWidth={true}
              maxRows={4}
              color="primary"
              focused
            />
            <div>
              {state?.error?.copCon && (
                <p className="text-sm text-red-500">{state.error.copCon}</p>
              )}
            </div>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="copConUnit"
              name="copConUnit"
              select
              label="واحد غلظت مس"
              defaultValue="cm3"
              variant="outlined"
              fullWidth={true}
              slotProps={{
                select: {
                  native: true,
                },
              }}
              // helperText=" "
            >
              {copConUnitSelect.map((option) => (
                <option key={option.value} value={option.label}>
                  {option.label}
                </option>
              ))}
            </TextField>
            <div>
              {state?.error?.copConUnit && (
                <p className="text-sm text-red-500">
                  {state.error.copConUnit}
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

export default AddCopperConcentration;
