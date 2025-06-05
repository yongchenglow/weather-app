import { appTheme, AppTheme } from "@/constants/configs";
import { useEffect, useState } from "react";

const useSystemTheme = (): AppTheme | undefined => {
  const [theme, setTheme] = useState<AppTheme | undefined>(undefined);

  useEffect(() => {
    if (!window.matchMedia) {
      setTheme(appTheme.LIGHT);
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setTheme(mediaQuery.matches ? appTheme.DARK : appTheme.LIGHT);

    const handleChange = (event: MediaQueryListEvent) => {
      setTheme(event.matches ? appTheme.DARK : appTheme.LIGHT);
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleChange);
    } else {
      mediaQuery.addListener(handleChange); // fallback for older browsers
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", handleChange);
      } else {
        mediaQuery.removeListener(handleChange);
      }
    };
  }, []);

  return theme;
};

export default useSystemTheme;
