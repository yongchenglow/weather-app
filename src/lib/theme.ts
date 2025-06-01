import { notoSans } from "@/lib/font";
import { createTheme } from "@mui/material/styles";

// Otherwise stated, values are obtained from https://www.figma.com/design/4QjlaIXuvEEMUdvvBKjDZH/Weather-App?node-id=1-2&t=1SAuIeyvjWp5OTkY-0

const lightTheme = createTheme({
  typography: {
    fontFamily: `"${notoSans.style.fontFamily}", "Roboto", "Arial", sans-serif`,
  },
  palette: {
    mode: "light",
    primary: {
      light: "#8966c3", // Obtained from https://mui.com/material-ui/customization/color/
      main: "#6C40B5",
      dark: "#4b2c7e", // Obtained from https://mui.com/material-ui/customization/color/
    },
    text: {
      primary: "#000000",
      secondary: "#666666",
    },
  },
});

const darkTheme = createTheme({
  typography: {
    fontFamily: `"${notoSans.style.fontFamily}", "Roboto", "Arial", sans-serif`,
    body2: {
      color: "rgba(255, 255, 255, 0.5)", // white at 50% opacity
    },
  },
  palette: {
    mode: "dark",
    primary: {
      light: "#534170", // Obtained from https://mui.com/material-ui/customization/color/
      main: "#28124D",
      dark: "#1c0c35", // Obtained from https://mui.com/material-ui/customization/color/
    },
    text: {
      secondary: "#FFFFFF",
    },
  },
});

export { lightTheme, darkTheme };
