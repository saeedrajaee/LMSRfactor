"use client";

import { createPls } from "../action/pls.api";
import { useActionState } from "react";
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

const AddPls = () => {
  const [state, action] = useActionState(createPls, initialState);

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
            
            <LocalizationProvider dateAdapter={AdapterMomentJalaali}>
              <DatePicker
                label=" تاریخ برداشت"
                name="plsDate"
                // value={value}
                onChange={(newValue) => setValue(newValue)}
              />
            </LocalizationProvider>
            {/* <TextField
              id="plsDate"
              name="plsDate"
              type="date"
              label=" تاریخ برداشت"
              variant="outlined"
              fullWidth={true}
              maxRows={4}
              color="primary"
              focused
            /> */}
            <div>
              {state?.error?.plsDate && (
                <p className="text-sm text-red-500">
                  {state.error.plsDate}
                </p>
              )}
            </div>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="fe"
              name="fe"
              label="fe"
              variant="outlined"
              fullWidth={true}
              maxRows={4}
              color="primary"
              focused
            />
            <div>
              {state?.error?.fe && (
                <p className="text-sm text-red-500">{state.error.fe}</p>
              )}
            </div>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="feUnit"
              name="feUnit"
              select
              label="واحد"
              defaultValue="k"
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
            <div>
              {state?.error?.feUnit && (
                <p className="text-sm text-red-500">
                  {state.error.feUnit}
                </p>
              )}
            </div>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="ph"
              name="ph"
              label="ph"
              variant="outlined"
              fullWidth={true}
              maxRows={4}
              color="primary"
              focused
            />
            <div>
              {state?.error?.ph && (
                <p className="text-sm text-red-500">{state.error.ph}</p>
              )}
            </div>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="phUnit"
              name="phUnit"
              select
              label="واحد"
              defaultValue="k"
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
            <div>
              {state?.error?.phUnit && (
                <p className="text-sm text-red-500">
                  {state.error.phUnit}
                </p>
              )}
            </div>
          </Grid>


          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="eh"
              name="eh"
              label="eh"
              variant="outlined"
              fullWidth={true}
              maxRows={4}
              color="primary"
              focused
            />
            <div>
              {state?.error?.eh && (
                <p className="text-sm text-red-500">{state.error.eh}</p>
              )}
            </div>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="ehUnit"
              name="ehUnit"
              select
              label="واحد"
              defaultValue="k"
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
            <div>
              {state?.error?.ehUnit && (
                <p className="text-sm text-red-500">
                  {state.error.ehUnit}
                </p>
              )}
            </div>
          </Grid>


          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="ec"
              name="ec"
              label="ec"
              variant="outlined"
              fullWidth={true}
              maxRows={4}
              color="primary"
              focused
            />
            <div>
              {state?.error?.ec && (
                <p className="text-sm text-red-500">{state.error.ec}</p>
              )}
            </div>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="ecUnit"
              name="ecUnit"
              select
              label="واحد"
              defaultValue="k"
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
            <div>
              {state?.error?.ecUnit && (
                <p className="text-sm text-red-500">
                  {state.error.ecUnit}
                </p>
              )}
            </div>
          </Grid>

         <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="t"
              name="t"
              label="t"
              variant="outlined"
              fullWidth={true}
              maxRows={4}
              color="primary"
              focused
            />
            <div>
              {state?.error?.t && (
                <p className="text-sm text-red-500">{state.error.t}</p>
              )}
            </div>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="tUnit"
              name="tUnit"
              select
              label="واحد"
              defaultValue="k"
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
            <div>
              {state?.error?.tUnit && (
                <p className="text-sm text-red-500">
                  {state.error.tUnit}
                </p>
              )}
            </div>
          </Grid>
		  
	         <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="tss"
              name="tss"
              label="tss"
              variant="outlined"
              fullWidth={true}
              maxRows={4}
              color="primary"
              focused
            />
            <div>
              {state?.error?.tss && (
                <p className="text-sm text-red-500">{state.error.tss}</p>
              )}
            </div>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="tssUnit"
              name="tssUnit"
              select
              label="واحد"
              defaultValue="k"
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
            <div>
              {state?.error?.tssUnit && (
                <p className="text-sm text-red-500">
                  {state.error.tssUnit}
                </p>
              )}
            </div>
          </Grid>	

	         <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="pb"
              name="pb"
              label="pb"
              variant="outlined"
              fullWidth={true}
              maxRows={4}
              color="primary"
              focused
            />
            <div>
              {state?.error?.pb && (
                <p className="text-sm text-red-500">{state.error.pb}</p>
              )}
            </div>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="pbUnit"
              name="pbUnit"
              select
              label="واحد"
              defaultValue="k"
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
            <div>
              {state?.error?.pbUnit && (
                <p className="text-sm text-red-500">
                  {state.error.pbUnit}
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

export default AddPls;
