"use client";

import { Button, TextField, Container, Typography } from "@mui/material";
import { useActionState } from "react";
import login from "./login";
import Box from "@mui/material/Box";

import logo from "@/assets/icons/logo.png";
import Image from "next/image";
import Link from "next/link";


export default function Login() {
  const [state, formAction] = useActionState(login, { error: "" });

  return (
    <Container component="main" maxWidth="xs" sx={{ mt: 8 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          bgcolor: "background.paper",
          borderRadius: 2,
          boxShadow: 3,
          p: 3,
        }}
      >
        <Image src={logo} alt="logo" width={50} height={50} />
        {/*<LockIcon sx={{ fontSize: 60, mb: 2 }} />*/}
        <Typography component="h1" variant="h5" sx={{ mb: 2 }}>
          ورود
        </Typography>
        <form action={formAction}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="نام کاربری"
            name="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="کلمه عبور"
            type="password"
            id="password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            ورود
          </Button>

          <Link href="/auth/signup" className="self-center">
            ثبت نام
          </Link>

        </form>
      </Box>
    </Container>
  );
}
