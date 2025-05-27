import { notoSans } from "@/lib/font";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: `"${notoSans.style.fontFamily}", "Roboto", "Arial", sans-serif`,
  },
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
});

export default theme;
