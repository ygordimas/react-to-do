import {
  createTheme,
  styled,
  experimental_sx as sx,
} from "@mui/material/styles";
import {
  teal,
  blueGrey,
  grey,
  lightBlue,
  orange,
  red,
} from "@mui/material/colors";
import { TextField, Button } from "@mui/material";

const Colors = {
  fontPrimary: grey[900],
  header: "#ecfffe",
  primary: teal[100],
  secondary: lightBlue[100],
  warning: orange[400],
  background: blueGrey["A100"],
  surface: grey[50],
  info: lightBlue[50],
};

const theme = createTheme({
  palette: {
    fontPrimary: {
      main: Colors.fontPrimary,
    },
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
    background: { main: Colors.background },
    warning: { main: Colors.warning },
    header: { main: Colors.header },
  },
});

theme.components = {
  MuiAppBar: {
    styleOverrides: {
      positionStatic: {
        paddingBlock: "20px",
        borderBottom: `1px solid ${theme.palette.header.main}`,
        // borderColor: theme.palette.warning.main,
        backgroundColor: `${theme.palette.primary.light}`,
      },
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        backgroundColor: `${theme.palette.surface.light}`,
      },
    },
  },
  MuiTabs: {
    styleOverrides: {
      root: {
        backgroundColor: "primary.main.dark",
      },
      indicator: {
        backgroundColor: "warning",
      },
    },
  },
  MuiTab: {
    styleOverrides: {
      root: {
        "&.Mui-selected": {
          backgroundColor: "secondary.main",
          color: teal[300],
        },
      },
      textColorPrimary: {
        color: teal[300],
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        color: `${theme.palette.fontPrimary.main}`,
        backgroundColor: teal[50],

        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: `${theme.palette.secondary.dark}`,
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: `${theme.palette.header.main}`,
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: `${theme.palette.secondary.dark}`,
        },
      },
    },
  },
  MuiInputLabel: {
    styleOverrides: {
      root: {
        color: `${theme.palette.fontPrimary.main}`,
      },
      shrink: {
        color: `${theme.palette.primary.dark}`,
        fontWeight: 700,
        "&.Mui-focused": {
          color: `${theme.palette.secondary.dark}`,
          fontWeight: 700,
        },
      },
    },
  },
};

export const HeaderButton = styled(Button)(({ theme }) => ({
  "&.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeLarge.MuiButton-containedSizeLarge":
    {
      backgroundColor: theme.palette.secondary.main,
      "&:hover": {
        backgroundColor: theme.palette.secondary.light,
      },
    },
}));

export const StyledTextField = styled(TextField)(({ theme }) => ({
  "& label": {
    color: `${theme.palette.fontPrimary.main}`,
  },
  "& label.Mui-focused": {
    color: `${theme.palette.secondary.dark}`,
    fontWeight: 700,
  },
}));

export default theme;
