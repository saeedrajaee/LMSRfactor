"use client";

import { createFlow } from "../action/flow.api";
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

const AddFlow = () => {
  const [state, action] = useActionState(createFlow, initialState);

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
              id="flowDataIntDate"
              name="flowDataIntDate"
              type="date"
              label=" تاریخ برداشت"
              variant="outlined"
              fullWidth={true}
              maxRows={4}
              color="primary"
              focused
            />
            <div>
              {state?.error?.flowDataIntDate && (
                <p className="text-sm text-red-500">
                  {state.error.flowDataIntDate}
                </p>
              )}
            </div>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="flowRate"
              name="flowRate"
              label="دبی پاشش "
              variant="outlined"
              fullWidth={true}
              maxRows={4}
              color="primary"
              focused
            />
            <div>
              {state?.error?.flowRate && (
                <p className="text-sm text-red-500">{state.error.flowRate}</p>
              )}
            </div>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="flowUnit"
              name="flowUnit"
              select
              label="واحد دبی پاشش"
              defaultValue="cm3"
              variant="outlined"
              fullWidth={true}
              slotProps={{
                select: {
                  native: true,
                },
              }}
            >
              {flowSelect.map((option) => (
                <option key={option.value} value={option.label}>
                  {option.label}
                </option>
              ))}
            </TextField>
            <div>
              {state?.error?.flowUnit && (
                <p className="text-sm text-red-500">
                  {state.error.flowUnit}
                </p>
              )}
            </div>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="pad"
              name="pad"
              label="نام پد"
              variant="outlined"
              fullWidth={true}
              maxRows={4}
              color="primary"
              focused
            />
            <div>
              {state?.error?.pad && (
                <p className="text-sm text-red-500">{state.error.pad}</p>
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

export default AddFlow;
