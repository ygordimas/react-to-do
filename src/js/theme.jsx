import { createTheme } from "@mui/material/styles";
import { teal, blueGrey, grey, lightBlue, orange } from "@mui/material/colors";

const Colors = {
  primary: teal[100],
  secondary: lightBlue[100],
  warning: orange[400],
  background: blueGrey["A100"],
  surface: grey[50],
  info: lightBlue[50],
};

const myTheme = createTheme({
  palette: {
    primary: {
      main: Colors.primary,
    },
    secondary: {
      main: Colors.secondary,
    },
    info: {
      main: Colors.info,
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: Colors.surface,
        },
      },
    },
  },
});

export default myTheme;
