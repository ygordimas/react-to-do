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
  primary: teal[50],
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
      accent: teal[600],
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

theme.typography.h1 = {
  fontFamily: "'Roboto', sans-serif",
  fontWeight: 700,
  fontSize: "1.3rem",
  cursor: "default",
  color: theme.palette.secondary.dark,
  [theme.breakpoints.down("lg")]: {},
};

theme.components = {
  MuiAppBar: {
    styleOverrides: {
      positionStatic: {
        paddingBlock: "20px",
        borderBottom: `1px solid ${theme.palette.primary.dark}`,
        // borderColor: theme.palette.warning.main,
        backgroundColor: `${theme.palette.info.main}`,
        [theme.breakpoints.up("lg")]: {},
      },
    },
  },
  MuiToolbar: {
    styleOverrides: {
      root: {
        // [theme.breakpoints.up("xs")]: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        // },
        [theme.breakpoints.up("lg")]: {
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        },
        "& .MuiBox-root": {
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          [theme.breakpoints.up("lg")]: {
            flexDirection: "row",
            justifyContent: "flex-end",

            alignItems: "center",
          },
        },
        "& .MuiBox-root .MuiButton-root": {
          width: "50%",
          margin: "8px auto",
          [theme.breakpoints.up("lg")]: {
            width: "100px",
            margin: 0,
          },
        },
        "& .MuiBox-root .MuiTextField-root": {
          width: "100%",
          marginBlock: 10,
          [theme.breakpoints.up("lg")]: {
            paddingInline: "3px",
            marginBlock: 0,
            width: "auto",
            flexGrow: "1",
          },
        },
        "& .MuiBox-root .MuiTextField-root:first-of-type": {
          maxWidth: "230px",
          marginTop: 32,
          [theme.breakpoints.up("lg")]: {
            marginTop: 0,
            width: "auto",
          },
        },

        "& .MuiButton-root.MuiButton-contained": {
          backgroundColor: theme.palette.primary.light,
          color: theme.palette.secondary.dark,
          width: "8.6rem",
          [theme.breakpoints.up("lg")]: {
            padding: "4px",
            marginLeft: "5px",
            width: "6rem",
          },
          "&:first-of-type": {
            backgroundColor: theme.palette.secondary.main,
            border: `1px solid ${theme.palette.primary.accent}`,
            width: "16rem",
            [theme.breakpoints.up("lg")]: {
              paddingBlock: "8px",
              width: "8.6rem",
            },
            "&:hover": {
              backgroundColor: theme.palette.secondary.light,
              color: theme.palette.primary.accent,
            },
          },
          "&:hover": {
            backgroundColor: theme.palette.primary.light,
            color: theme.palette.primary.accent,
          },
        },
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
        backgroundColor: theme.palette.secondary.main,
      },
      indicator: {
        backgroundColor: theme.palette.primary.accent,
      },
    },
  },
  MuiTab: {
    styleOverrides: {
      root: {
        "&.Mui-selected": {
          backgroundColor: `${theme.palette.secondary.main}`,
          color: theme.palette.primary.accent,
        },
      },
      textColorPrimary: {
        color: theme.palette.primary.dark,
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        color: `${theme.palette.fontPrimary.main}`,
        backgroundColor: theme.palette.header.main,

        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: `${theme.palette.primary.accent}`,
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: `${theme.palette.header.main}`,
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: `${theme.palette.primary.accent}`,
        },
      },
    },
  },
  MuiInputLabel: {
    styleOverrides: {
      root: {
        color: `${theme.palette.primary.accent}`,
      },
      shrink: {
        color: `${theme.palette.primary.accent}`,
        fontWeight: 700,
        "&.Mui-focused": {
          color: `${theme.palette.primary.accent}`,
          fontWeight: 700,
        },
      },
    },
  },
  MuiTable: {
    styleOverrides: {
      root: {
        "& .MuiTableCell-root": {
          paddingInline: "3px",
          textAlign: "center",
        },
      },
    },
  },

  MuiTableHead: {
    styleOverrides: {
      root: {
        backgroundColor: `${theme.palette.info.light}`,
      },
    },
  },
  MuiTableBody: {
    styleOverrides: {
      root: {
        backgroundColor: theme.palette.header.main,
      },
    },
  },
};

// export const HeaderButton = styled(Button)(({ theme }) => ({
//   fontSize: "100%",
//   textTransform: "uppercase",
//   fontWeight: "500",

//   border: `1px solid ${theme.palette.secondary.dark}`,
//   "&.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeLarge.MuiButton-containedSizeLarge":
//     {
//       backgroundColor: theme.palette.secondary.main,
//       color: theme.palette.secondary.dark,
//       padding: "20px",
//       "&:hover": {
//         backgroundColor: theme.palette.secondary.light,
//         fontWeight: "700",

//         color: theme.palette.fontPrimary.main,
//       },
//     },
// }));

export const StyledTextField = styled(TextField)(({ theme }) => ({
  "& label": {
    color: `${theme.palette.primary.accent}`,
  },
  "& label.Mui-focused": {
    color: `${theme.palette.primary.accent}`,
    fontWeight: 700,
  },
}));

export const ListButton = styled(Button)(() => ({
  paddingInline: "4px",
  borderRadius: "24px",

  "&:hover": {
    backgroundColor: theme.palette.secondary.light,
    border: `1px solid ${theme.palette.primary.accent}`,
  },
  "& .MuiSvgIcon-root": {
    fill: `${theme.palette.primary.accent}`,
  },
}));

export default theme;
