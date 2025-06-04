"use client";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { ReactNode } from "react";
import createAppTheme from "@lib/theme";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import useSystemTheme from "@/hooks/useSystemTheme";

export default function ThemeRegistry({ children }: { children: ReactNode }) {
  const systemTheme = useSystemTheme();
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={createAppTheme(systemTheme)}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
