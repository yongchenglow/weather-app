import { appTheme, AppTheme } from "@/constants/configs";
import { notoSans } from "@/lib/font";
import { createTheme, PaletteMode } from "@mui/material/styles";

const baseTheme = createTheme();

const customMobileFontSizes = {
  body1: "0.875rem",
  body2: "0.75rem",
  button: "0.75rem",
  caption: "0.625rem",
};

// Otherwise stated, values are obtained from https://www.figma.com/design/4QjlaIXuvEEMUdvvBKjDZH/Weather-App?node-id=1-2&t=1SAuIeyvjWp5OTkY-0
const createAppTheme = (mode: AppTheme = appTheme.LIGHT) =>
  createTheme({
    typography: {
      fontFamily: `"${notoSans.style.fontFamily}", "Roboto", "Arial", sans-serif`,
      body1: {
        [baseTheme.breakpoints.down("md")]: {
          fontSize: customMobileFontSizes.body1,
        },
      },
      body2: {
        color: mode === appTheme.DARK ? "rgba(255, 255, 255, 0.5)" : undefined,
        [baseTheme.breakpoints.down("md")]: {
          fontSize: customMobileFontSizes.body2,
        },
      },
      button: {
        [baseTheme.breakpoints.down("md")]: {
          fontSize: customMobileFontSizes.button,
        },
      },
      caption: {
        [baseTheme.breakpoints.down("md")]: {
          fontSize: customMobileFontSizes.caption,
        },
      },
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
      MuiFilledInput: {
        styleOverrides: {
          root: ({ theme }) => ({
            borderRadius: theme.spacing(2.5),
            [theme.breakpoints.down("md")]: {
              borderRadius: theme.spacing(1),
            },
            backgroundColor: "rgba(26, 26, 26, 0.5)",
            "&:before": {
              borderBottom: "none !important",
            },
            "&:after": {
              borderBottom: "none",
            },
            "&:hover": {
              backgroundColor: "rgba(26, 26, 26, 0.8)",
            },
            "&.Mui-focused": {
              backgroundColor: "rgba(26, 26, 26, 0.5)",
            },
          }),
          input: ({ theme }) => ({
            paddingLeft: theme.spacing(3),
            paddingRight: theme.spacing(3),
            paddingTop: theme.spacing(2.625),
            paddingBottom: theme.spacing(2),
            [theme.breakpoints.down("md")]: {
              paddingLeft: theme.spacing(1.5),
              paddingRight: theme.spacing(1.5),
              paddingTop: theme.spacing(1.75),
              paddingBottom: theme.spacing(1.125),
            },
          }),
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: ({ theme }) => ({
            "&.MuiInputLabel-filled": {
              color: "rgba(255, 255, 255, 0.4)",
              left: theme.spacing(1.5),
              top: theme.spacing(0.25),
              [theme.breakpoints.down("md")]: {
                left: theme.spacing(0),
                top: theme.spacing(-0.75),
              },
            },
            "&.MuiInputLabel-filled.Mui-focused": {
              top: theme.spacing(0.25),
              fontSize: theme.typography.caption.fontSize,
              [theme.breakpoints.down("md")]: {
                fontSize: customMobileFontSizes.caption,
                top: theme.spacing(-0.125),
              },
              color: "rgba(255, 255, 255, 0.4)",
            },
            "&.MuiInputLabel-filled.MuiFormLabel-filled": {
              top: theme.spacing(0.25),
              fontSize: theme.typography.caption.fontSize,
              color: "rgba(255, 255, 255, 0.4)",
              [theme.breakpoints.down("md")]: {
                fontSize: customMobileFontSizes.caption,
                top: theme.spacing(-0.125),
              },
            },
          }),
        },
      },
      MuiButton: {
        styleOverrides: {
          root: ({ theme }) => ({
            borderRadius: theme.spacing(2.5),
            padding: theme.spacing(1),
            minWidth: theme.spacing(7.5),
            [theme.breakpoints.down("md")]: {
              minWidth: theme.spacing(5),
              borderRadius: theme.spacing(1),
            },
          }),
        },
      },
      MuiSvgIcon: {
        styleOverrides: {
          fontSizeMedium: ({ theme }) => ({
            fontSize: 34,
            [theme.breakpoints.down("md")]: {
              fontSize: 22,
            },
          }),
        },
      },
    },
  });

export default createAppTheme;
