"use client"

import "@/styles/globals.css";
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';

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
              <body
        className={`${cacheRtl.key} ${cacheRtl.key} antialiased`}
      >
        <CacheProvider value={cacheRtl}>
            {children}
        </CacheProvider>

        </body>
        </html>
    );
}


