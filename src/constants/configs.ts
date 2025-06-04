import { ValueOf } from "next/dist/shared/lib/constants";

const appTheme = {
  LIGHT: "light",
  DARK: "dark",
};

type AppTheme = ValueOf<typeof appTheme>;

export type { AppTheme };
export { appTheme };
