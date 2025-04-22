"use client";

import { Button, Stack, TextField, Container, Typography } from "@mui/material";
import NextLink from "next/link";
import { useActionState } from "react";
import createUser from "./create-user";
import Box from "@mui/material/Box";

import logo from "@/assets/icons/logo.png";
import Image from "next/image";
import Link from "next/link";

export default function Signup() {
  const [state, formAction] = useActionState(createUser, { error: "" });

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
            id="username"
            label="نام کاربری"
            name="email"
            autoFocus
            helperText={state.error}
            error={!!state.error}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="کلمه عبور"
            type="password"
            id="password"
            helperText={state.error}
            error={!!state.error}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            ثبت نام
          </Button>

          <Link href="/auth/login" className="self-center">
            ورود
          </Link>
        </form>
      </Box>
    </Container>
  );
}
