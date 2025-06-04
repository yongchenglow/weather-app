import { appTheme, AppTheme } from "@/constants/configs";
import { notoSans } from "@/lib/font";
import { createTheme, PaletteMode } from "@mui/material/styles";

// Otherwise stated, values are obtained from https://www.figma.com/design/4QjlaIXuvEEMUdvvBKjDZH/Weather-App?node-id=1-2&t=1SAuIeyvjWp5OTkY-0

const createAppTheme = (mode: AppTheme = appTheme.LIGHT) =>
  createTheme({
    typography: {
      fontFamily: `"${notoSans.style.fontFamily}", "Roboto", "Arial", sans-serif`,
      ...(mode === appTheme.DARK
        ? {
            body2: {
              color: "rgba(255, 255, 255, 0.5)",
            },
          }
        : {}),
    },
    palette: {
      mode: mode as PaletteMode,
      primary:
        mode === appTheme.LIGHT
          ? {
              light: "#8966c3", // Obtained from https://mui.com/material-ui/customization/color/
              main: "#6C40B5",
              dark: "#4b2c7e", // Obtained from https://mui.com/material-ui/customization/color/
            }
          : {
              light: "#534170", // Obtained from https://mui.com/material-ui/customization/color/
              main: "#28124D",
              dark: "#1c0c35", // Obtained from https://mui.com/material-ui/customization/color/
            },
      text:
        mode === appTheme.LIGHT
          ? {
              primary: "#000000",
              secondary: "#666666",
            }
          : {
              secondary: "#FFFFFF",
            },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          html: {
            minHeight: "100%",
          },
          body: {
            minHeight: "100%",
            backgroundImage: `url('/bg-${mode}.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
          },
          "#__next": {
            minHeight: "100%",
          },
        },
      },
    },
  });

export default createAppTheme;
