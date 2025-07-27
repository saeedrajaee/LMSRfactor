'use client'

import "@/styles/globals.css";
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';
import Grid from '@mui/material/Grid';
import Drawer from "@/components/Drawer";
import Nav from "@/components/Nav";

import { ThemeProvider, createTheme } from '@mui/material/styles';
import moment from 'moment-jalaali';
import Box from "@mui/material/Box";
import dynamic from 'next/dynamic'

moment.loadPersian({ dialect: 'persian-modern', usePersianDigits: true });

const NoSSR = dynamic(() => import('@/components/Nav'), { ssr: false })

const theme = createTheme({
    direction: 'rtl', // Set the direction to 'rtl' for the theme
});

const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});


export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fa" dir="rtl">
        <body>
        <CacheProvider value={cacheRtl}>
            <ThemeProvider theme={theme}>
                <div style={{ display: 'flex' }}>
                    <Drawer />
                    <Box sx={{ width: {xs: '100%', md: '85%'}, height: 'calc(100vh - 40px)', overflowY: 'scroll' }}>
                        <Nav/>
                        <Grid sx={{margin: 2}}>
                            {children}
                        </Grid>
                    </Box>
                </div>
            </ThemeProvider>
        </CacheProvider>

        </body>
        </html>
    );
}
