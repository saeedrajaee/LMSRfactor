"use client";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { AccountCircle} from "@mui/icons-material";
import { Button, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LogoutIcon from '@mui/icons-material/Logout';
import * as React from "react";
import { useRouter } from "next/navigation";

export default function Nav() {
  const router = useRouter();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        paddingX: 2,
        paddingY: 1,
        height: 40,
        backgroundColor: "white",
        borderBottom: "1px solid #e9e9e9",
      }}
    >
      <Stack
        spacing={2}
        direction="row"
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Breadcrumbs
          aria-label="breadcrumb"
          sx={{ display: { xs: "none", md: "block" } }}
        >
          <Link underline="hover" color="inherit" href="/">
            خانه
          </Link>
        </Breadcrumbs>
        <TextField
          sx={{ display: { xs: "none", md: "block" } }}
          id="input-with-icon-textfield"
          placeholder="جستجو"
          variant="outlined"
          size="small"
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            },
          }}
        />
      </Stack>
      <Stack direction="row" sx={{ flexDirection: "row-reverse" }}>
        <Button
          variant="outlined"
          color="error"
          sx={{ borderRadius: 10 }}
          onClick={() => router.push("/auth/login")}
        >
          <LogoutIcon sx={{ paddingRight: 1 ,fontSize: 30}}/>
          خروج
        </Button>
      </Stack>
    </Box>
  );
}
