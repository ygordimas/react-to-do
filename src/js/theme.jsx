import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#fbfffc",
      main: "#c8e6c9",
      dark: "#97b498",
      contrastText: "#000000",
    },
    secondary: {
      light: "#ffd95b",
      main: "#ffa726",
      dark: "#c77800",
      contrastText: "#000",
    },
  },
});

export default theme;
