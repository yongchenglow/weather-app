import { appTheme, AppTheme } from "@/constants/configs";
import { useEffect, useState } from "react";

const useSystemTheme = (): AppTheme => {
  const [theme, setTheme] = useState<AppTheme>(() => {
    if (typeof window !== "undefined" && window.matchMedia) {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? appTheme.DARK
        : appTheme.LIGHT;
    }
    return appTheme.LIGHT;
  });

  useEffect(() => {
    if (!window.matchMedia) return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (event: MediaQueryListEvent) => {
      setTheme(event.matches ? "dark" : "light");
    };

    if (mediaQuery.addEventListener) mediaQuery.addEventListener("change", handleChange);
    else mediaQuery.addListener(handleChange); // fallback for older browsers

    return () => {
      if (mediaQuery.addEventListener) mediaQuery.addEventListener("change", handleChange);
      else mediaQuery.addListener(handleChange); // fallback for older browsers
    };
  }, []);

  return theme;
};

export default useSystemTheme;
