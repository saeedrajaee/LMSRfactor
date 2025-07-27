"use client";

import { Button, Stack, TextField, Container, Typography } from "@mui/material";
import NextLink from "next/link";
import { useActionState } from "react";
import Box from "@mui/material/Box";

import logo from "@/assets/icons/logo.png";
import Image from "next/image";
import Link from "next/link";
import createUser from "./create-user";
import { signUp } from "@/lib/auth";

export default function SignupPage() {
  const [state, formAction] = useActionState(signUp, undefined);

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
            label="نام و نام خانوادگی"
            name="name"
            autoFocus
            helperText={state?.error?.name}
            error={!!state?.error?.name}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="نام کاربری"
            name="email"
            autoFocus
            helperText={state?.error?.email}
            error={!!state?.error?.email}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="کلمه عبور"
            type="password"
            id="password"
            helperText={state?.error?.password}
            error={!!state?.error?.password}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            ثبت نام
          </Button>

          <Link href="/auth/signin" className="self-center">
            ورود
          </Link>
        </form>
      </Box>
    </Container>
  );
}
