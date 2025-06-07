"use client";

import { createGcp } from "../action/gcp.api";
import { useActionState } from "react";
import Grid from '@mui/material/Grid';
import Button from "@mui/material/Button";
import * as React from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";



const initialState = {
  success: "",
  error: {
    hipName: "",
    gcpName: "",
    gcpX: "",
    gcpY: "",
    gcpZ: "",
    date: "",
    gcpHeight: "",
    dDay: "",
    dx: "",
    dxR: "",
    dxR1: "",
    dy: "",
    dyR: "",
    dyR1: "",
    dz: "",
    dzR: "",
    dzR1: "",
    ds: "",
    dsR: "",
    dsR1: "",
    dt: "",
    dtR: "",
    dtR1: "",
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


const AddGcp = () => {
  const [state, action] = useActionState(createGcp, initialState);

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
              id="gcpName"
              name="gcpName"
              label="نام ایستگاه"
              variant="outlined"
              fullWidth={true}
              maxRows={4}
              color="primary"
              focused
            />
            <div>
              {state?.error?.gcpName && (
                <p className="text-sm text-red-500">
                  {state.error.gcpName}
                </p>
              )}
            </div>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="gcpX"
              name="gcpX"
              label="X"
              variant="outlined"
              fullWidth={true}
              maxRows={4}
              color="primary"
              focused
            />
            <div>
              {state?.error?.gcpX && (
                <p className="text-sm text-red-500">
                  {state.error.gcpX}
                </p>
              )}
            </div>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="gcpY"
              name="gcpY"
              label="Y"
              variant="outlined"
              fullWidth={true}
              maxRows={4}
              color="primary"
              focused
            />
            <div>
              {state?.error?.gcpY && (
                <p className="text-sm text-red-500">
                  {state.error.gcpY}
                </p>
              )}
            </div>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="gcpZ"
              name="gcpZ"
              label="زون"
              variant="outlined"
              fullWidth={true}
              maxRows={4}
              color="primary"
              focused
            />
            <div>
              {state?.error?.gcpZ && (
                <p className="text-sm text-red-500">
                  {state.error.gcpZ}
                </p>
              )}
            </div>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="date"
              name="date"
              label="تاریخ برداشت"
              variant="outlined"
              fullWidth={true}
              maxRows={4}
              color="primary"
              focused
            />
            <div>
              {state?.error?.date && (
                <p className="text-sm text-red-500">
                  {state.error.date}
                </p>
              )}
            </div>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="gcpHeight"
              name="gcpHeight"
              label="ارتفاع ایستگاه"
              variant="outlined"
              fullWidth={true}
              maxRows={4}
              color="primary"
              focused
            />
            <div>
              {state?.error?.gcpHeight && (
                <p className="text-sm text-red-500">
                  {state.error.gcpHeight}
                </p>
              )}
            </div>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="dDay"
              name="dDay"
              label="روز سال"
              variant="outlined"
              fullWidth={true}
              maxRows={4}
              color="primary"
              focused
            />
            <div>
              {state?.error?.dDay && (
                <p className="text-sm text-red-500">
                  {state.error.dDay}
                </p>
              )}
            </div>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="dx"
              name="dx"
              label="dx"
              variant="outlined"
              fullWidth={true}
              maxRows={4}
              color="primary"
              focused
            />
            <div>
              {state?.error?.dx && (
                <p className="text-sm text-red-500">
                  {state.error.dx}
                </p>
              )}
            </div>
          </Grid>


          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="dxR"
              name="dxR"
              label="dxR"
              variant="outlined"
              fullWidth={true}
              maxRows={4}
              color="primary"
              focused
            />
            <div>
              {state?.error?.dxR && (
                <p className="text-sm text-red-500">
                  {state.error.dxR}
                </p>
              )}
            </div>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="dxR1"
              name="dxR1"
              label="معکوس dxR1"
              variant="outlined"
              fullWidth={true}
              maxRows={4}
              color="primary"
              focused
            />
            <div>
              {state?.error?.dxR1 && (
                <p className="text-sm text-red-500">
                  {state.error.dxR1}
                </p>
              )}
            </div>
          </Grid>


          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="dy"
              name="dy"
              label="dy"
              variant="outlined"
              fullWidth={true}
              maxRows={4}
              color="primary"
              focused
            />
            <div>
              {state?.error?.dy && (
                <p className="text-sm text-red-500">
                  {state.error.dy}
                </p>
              )}
            </div>
          </Grid>



          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="dyR"
              name="dyR"
              label="dyR"
              variant="outlined"
              fullWidth={true}
              maxRows={4}
              color="primary"
              focused
            />
            <div>
              {state?.error?.dyR && (
                <p className="text-sm text-red-500">
                  {state.error.dyR}
                </p>
              )}
            </div>
          </Grid>


          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="dyR1"
              name="dyR1"
              label="معکوس dyR1"
              variant="outlined"
              fullWidth={true}
              maxRows={4}
              color="primary"
              focused
            />
            <div>
              {state?.error?.dyR1 && (
                <p className="text-sm text-red-500">
                  {state.error.dyR1}
                </p>
              )}
            </div>
          </Grid>


          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="dz"
              name="dz"
              label=" dz"
              variant="outlined"
              fullWidth={true}
              maxRows={4}
              color="primary"
              focused
            />
            <div>
              {state?.error?.dz && (
                <p className="text-sm text-red-500">
                  {state.error.dz}
                </p>
              )}
            </div>
          </Grid>



          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="dzR"
              name="dzR"
              label=" dzR"
              variant="outlined"
              fullWidth={true}
              maxRows={4}
              color="primary"
              focused
            />
            <div>
              {state?.error?.dzR && (
                <p className="text-sm text-red-500">
                  {state.error.dzR}
                </p>
              )}
            </div>
          </Grid>



          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="dzR1"
              name="dzR1"
              label=" معکوس dzR1"
              variant="outlined"
              fullWidth={true}
              maxRows={4}
              color="primary"
              focused
            />
            <div>
              {state?.error?.dzR1 && (
                <p className="text-sm text-red-500">
                  {state.error.dzR1}
                </p>
              )}
            </div>
          </Grid>





          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="ds"
              name="ds"
              label="ds"
              variant="outlined"
              fullWidth={true}
              maxRows={4}
              color="primary"
              focused
            />
            <div>
              {state?.error?.ds && (
                <p className="text-sm text-red-500">
                  {state.error.ds}
                </p>
              )}
            </div>
          </Grid>




          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="dsR"
              name="dsR"
              label="dsR"
              variant="outlined"
              fullWidth={true}
              maxRows={4}
              color="primary"
              focused
            />
            <div>
              {state?.error?.dsR && (
                <p className="text-sm text-red-500">
                  {state.error.dsR}
                </p>
              )}
            </div>
          </Grid>


          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="dsR1"
              name="dsR1"
              label="معکوس dsR1"
              variant="outlined"
              fullWidth={true}
              maxRows={4}
              color="primary"
              focused
            />
            <div>
              {state?.error?.dsR1 && (
                <p className="text-sm text-red-500">
                  {state.error.dsR1}
                </p>
              )}
            </div>
          </Grid>


          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="dt"
              name="dt"
              label="dt"
              variant="outlined"
              fullWidth={true}
              maxRows={4}
              color="primary"
              focused
            />
            <div>
              {state?.error?.dt && (
                <p className="text-sm text-red-500">
                  {state.error.dt}
                </p>
              )}
            </div>
          </Grid>


          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="dtR"
              name="dtR"
              label="dtR"
              variant="outlined"
              fullWidth={true}
              maxRows={4}
              color="primary"
              focused
            />
            <div>
              {state?.error?.dtR && (
                <p className="text-sm text-red-500">
                  {state.error.dtR}
                </p>
              )}
            </div>
          </Grid>


          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="dtR1"
              name="dtR1"
              label="معکوس dtR1"
              variant="outlined"
              fullWidth={true}
              maxRows={4}
              color="primary"
              focused
            />
            <div>
              {state?.error?.dtR1 && (
                <p className="text-sm text-red-500">
                  {state.error.dtR1}
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

export default AddGcp;
