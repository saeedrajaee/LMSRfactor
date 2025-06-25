import z from "zod";

export const UploadformSchema = z.object({
  file: z
    .instanceof(File)
    .refine((file) =>[
      "application/pdf",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ].includes(file.type),
     { message: "Please choose a Pdf file" })
     .refine((file) => file.size> 0, {
      message: "Please choose a file"})

  
});