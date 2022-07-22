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

    surface: {
      main: Colors.surface,
      dark: grey[500],
    },
    background: Colors.warning,
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: Colors.surface,
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          backgroundColor: teal[50],
        },
        indicator: {
          backgroundColor: teal[200],
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            backgroundColor: lightBlue[100],
            color: teal[300],
          },
        },
        textColorPrimary: {
          color: teal[300],
        },
      },
    },
  },
});

export default myTheme;
