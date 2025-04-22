import { z } from "zod";

export const accumulationTermSchema = z.object({
  hipName: z.string().min(1, { message: "نام هیپ را انتخاب نمائید" }).trim(),
  flowIn: z
    .string()
    .min(1, { message: "مقدار دبی ورودی را وارد نمائید" })
    .trim(),
  flowUnitIn: z
    .string()
    .min(1, { message: "واحد دبی ورودی را انتخاب نمائید" })
    .trim(),
  flowOut: z
    .string()
    .min(1, { message: "مقدار دبی خروجی را وارد نمائید" })
    .trim(),
  flowUnitOut: z
    .string()
    .min(1, { message: "واحد دبی خروجی را انتخاب نمائید" })
    .trim(),
  accumulationDate: z
    .string()
    .min(1, { message: "تاریخ ورود اطلاعات مشخص نمائید" })
    .trim(),
  accumulationTerm: z
    .string()
    .min(1, { message: "مقدار ترم انباشتگی را وارد نمائید" })
    .trim(),
});

export const CopperConcentrationSchema = z.object({
  hipName: z.string().min(1, { message: "نام هیپ را انتخاب نمائید" }).trim(),
  copConDate: z
    .string()
    .min(1, { message: "تاریخ ورود اطلاعات مشخص نمائید" })
    .trim(),
  copCon: z.string().min(1, { message: "مقدار غلظت مس را وارد نمائید" }).trim(),
  copConUnit: z
    .string()
    .min(1, { message: "واحد غلظت مس را انتخاب نمائید" })
    .trim(),
});

export const FlowSchema = z.object({
  hipName: z.string().min(1, { message: "نام هیپ را انتخاب نمائید" }).trim(),
  flowDataIntDate: z
    .string()
    .min(1, { message: "تاریخ ورود اطلاعات مشخص نمائید" })
    .trim(),
  flowRate: z
    .string()
    .min(1, { message: "مقدار  پاشش دبی را وارد نمائید" })
    .trim(),
  flowUnit: z.string().min(1, { message: "واحد  دبی را انتخاب نمائید" }).trim(),
  pad: z.string().min(1, { message: "نام پد را وارد نمائید" }).trim(),
});

export const PiezometerAcidSchema = z.object({
  hipName: z.string().min(1, { message: "نام هیپ را انتخاب نمائید" }).trim(),
  piezometerName: z
    .string()
    .min(1, { message: "نام پیزومتر را وارد نمائید" })
    .trim(),
  piezometerDate: z
    .string()
    .min(1, { message: "تاریخ ورود اطلاعات مشخص نمائید" })
    .trim(),
  piezometerAcidLevel: z
    .string()
    .min(1, { message: "سطح اسید پیزومتر را وارد نمائید" })
    .trim(),
  piezometerAcidLevelUnit: z
    .string()
    .min(1, { message: "واحد سطح اسید پیزومتر را وارد نمائید" })
    .trim(),
});

export const PiezometerTempSchema = z.object({
  hipName: z.string().min(1, { message: "نام هیپ را انتخاب نمائید" }).trim(),
  piezometerName: z
    .string()
    .min(1, { message: "نام پیزومتر را وارد نمائید" })
    .trim(),
  piezometerTempDate: z
    .string()
    .min(1, { message: "تاریخ ورود اطلاعات مشخص نمائید" })
    .trim(),
  piezometerTemp: z
    .string()
    .min(1, { message: "میزان دما پیزومتر را وارد نمائید" })
    .trim(),
  tempUnit: z
    .string()
    .min(1, { message: "واحد دما پیزومتر را وارد نمائید" })
    .trim(),
});

export const PlsSchema = z.object({
  hipName: z.string().min(1, { message: "نام هیپ را انتخاب نمائید" }).trim(),
  plsDate: z
    .string()
    .min(1, { message: "تاریخ ورود اطلاعات را وارد نمائید" })
    .trim(),
  fe: z.string().min(1, { message: "fe را وارد نمائید" }).trim(),
  feUnit: z.string().min(1, { message: "واحد fe وارد نمائید" }).trim(),
  ph: z.string().min(1, { message: "ph را وارد نمائید" }).trim(),
  phUnit: z.string().min(1, { message: "واحد ph وارد نمائید" }).trim(),
  eh: z.string().min(1, { message: "eh را وارد نمائید" }).trim(),
  ehUnit: z.string().min(1, { message: "واحد eh وارد نمائید" }).trim(),
  ec: z.string().min(1, { message: "ec را وارد نمائید" }).trim(),
  ecUnit: z.string().min(1, { message: "واحد ec وارد نمائید" }).trim(),
  t: z.string().min(1, { message: "t را وارد نمائید" }).trim(),
  tUnit: z.string().min(1, { message: "واحد t وارد نمائید" }).trim(),
  tss: z.string().min(1, { message: "tss را وارد نمائید" }).trim(),
  tssUnit: z.string().min(1, { message: "واحد tss وارد نمائید" }).trim(),
  pb: z.string().min(1, { message: "pb را وارد نمائید" }).trim(),
  pbUnit: z.string().min(1, { message: "واحد pb وارد نمائید" }).trim(),
});

export const WellWaterLevelSchema = z.object({
  hipName: z.string().min(1, { message: "نام هیپ را انتخاب نمائید" }).trim(),
  wellLevelDate: z
    .string()
    .min(1, { message: "تاریخ ورود اطلاعات مشخص نمائید" })
    .trim(),
  wellName: z.string().min(1, { message: "نام چاه وارد گردد" }).trim(),
  wellLevelHeight: z
    .string()
    .min(1, { message: "سطح آب چاه وارد گردد" })
    .trim(),
  wellLevelUnit: z
    .string()
    .min(1, { message: "واحد ارتفاع چاه را وارد نمائید" })
    .trim(),
});

export const GcpSchema = z.object({
  hipName: z.string().min(1, { message: "نام هیپ را انتخاب نمائید" }).trim(),
  gcpName: z.string().min(1, { message: "نام GCP را وارد نمائید" }).trim(),
  gcpX: z.string().min(6, { message: "مقدار x را حداقل 6 کاراکتر وارد نمائید" }).trim(),
  gcpY: z.string().min(7, { message: "مقدار y را حداقل 7 کاراکتر وارد نمائید" }).trim(),
  gcpZ: z.string().min(1, { message: "مقدار زون را وارد نمائید" }).trim(),
  date: z.string().min(1, { message: "تاریخ ورود اطلاعات مشخص نمائید" }).trim(),
  gcpHeight: z
    .string()
    .min(1, { message: "مقدار ارتفاع را وارد نمائید" })
    .trim(),
  dDay: z.string().min(1, { message: "مقدار روز سال را وارد نمائید" }).trim(),
  dx: z.string().min(1, { message: "مقدار dx را وارد نمائید" }).trim(),
  dxR: z.string().min(1, { message: "مقدار dxr را وارد نمائید" }).trim(),
  dxR1: z.string().min(1, { message: "مقدار معکوس dxr را وارد نمائید" }).trim(),
  dy: z.string().min(1, { message: "مقدار dy را وارد نمائید" }).trim(),
  dyR: z.string().min(1, { message: "مقدار dyr را وارد نمائید" }).trim(),
  dyR1: z.string().min(1, { message: "مقدار معکوس dyr را وارد نمائید" }).trim(),
  dz: z.string().min(1, { message: "مقدار dz را وارد نمائید" }).trim(),
  dzR: z.string().min(1, { message: "مقدار dzr را وارد نمائید" }).trim(),
  dzR1: z.string().min(1, { message: "مقدار »عکوس dzr را وارد نمائید" }).trim(),
  ds: z.string().min(1, { message: "مقدار ds را وارد نمائید" }).trim(),
  dsR: z.string().min(1, { message: "مقدار dsr را وارد نمائید" }).trim(),
  dsR1: z.string().min(1, { message: "مقدار معکوس dsr را وارد نمائید" }).trim(),
  dt: z.string().min(1, { message: "مقدار dt را وارد نمائید" }).trim(),
  dtR: z.string().min(1, { message: "مقدار dtr را وارد نمائید" }).trim(),
  dtR1: z.string().min(1, { message: "مقدار معکوس dtr را وارد نمائید" }).trim(),
});
