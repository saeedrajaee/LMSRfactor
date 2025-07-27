"use client";

import { createAccumulationTerm } from "../action/accumulation-term.api";
import { useActionState } from "react";
import Grid from "@mui/material/Grid";
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
    flowIn: "",
    flowUnitIn: "",
    flowOut: "",
    flowUnitOut: "",
    accumulationDate: "",
    accumulationTerm: "",
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

const AddAccumulationTerm = () => {
  const [state, action] = useActionState(createAccumulationTerm, initialState);

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
              id="flowIn"
              name="flowIn"
              label="دبی ورودی"
              variant="outlined"
              fullWidth={true}
              maxRows={4}
              color="primary"
              focused
            />
            <div>
              {state?.error?.flowIn && (
                <p className="text-sm text-red-500">{state.error.flowIn}</p>
              )}
            </div>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="flowUnitIn"
              name="flowUnitIn"
              select
              label="واحد دبی ورودی"
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
              {debiUnitSelect.map((option) => (
                <option key={option.value} value={option.label}>
                  {option.label}
                </option>
              ))}
            </TextField>
            <div>
              {state?.error?.flowUnitIn && (
                <p className="text-sm text-red-500">{state.error.flowUnitIn}</p>
              )}
            </div>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="flowOut"
              name="flowOut"
              label="دبی خروجی"
              variant="outlined"
              fullWidth={true}
              maxRows={4}
              color="primary"
              focused
            />
            <div>
              {state?.error?.flowOut && (
                <p className="text-sm text-red-500">{state.error.flowOut}</p>
              )}
            </div>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="flowUnitOut"
              name="flowUnitOut"
              select
              label="واحد دبی خروجی"
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
              {debiUnitSelect.map((option) => (
                <option key={option.value} value={option.label}>
                  {option.label}
                </option>
              ))}
            </TextField>
            <div>
              {state?.error?.flowUnitOut && (
                <p className="text-sm text-red-500">
                  {state.error.flowUnitOut}
                </p>
              )}
            </div>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <LocalizationProvider dateAdapter={AdapterMomentJalaali}>
              <DatePicker
                label=" تاریخ برداشت"
                name="accumulationDate"
                onChange={(newValue) => setValue(newValue)}
              />
            </LocalizationProvider>
            <div>
              {state?.error?.accumulationDate && (
                <p className="text-sm text-red-500">
                  {state.error.accumulationDate}
                </p>
              )}
            </div>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="accumulationTerm"
              name="accumulationTerm"
              label="ترم انباشتگی"
              variant="outlined"
              fullWidth={true}
              maxRows={4}
              color="primary"
              focused
            />
            <div>
              {state?.error?.accumulationTerm && (
                <p className="text-sm text-red-500">
                  {state.error.accumulationTerm}
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

export default AddAccumulationTerm;
