import { createTheme } from '@mui/material';
import { createBreakpoints } from '@mui/system';

// const lightBlue = {
//   50: '#e1f5fe',
//   100: '#b3e5fc',
//   200: '#81d4fa',
//   300: '#4fc3f7',
//   400: '#29b6f6',
//   500: '#03a9f4',
//   600: '#039be5',
//   700: '#0288d1',
//   800: '#0277bd',
//   900: '#01579b',
//   A100: '#80d8ff',
//   A200: '#40c4ff',
//   A400: '#00b0ff',
//   A700: '#0091ea',
// };

// const lime = {
//   50: '#f9fbe7',
//   100: '#f0f4c3',
//   200: '#e6ee9c',
//   300: '#dce775',
//   400: '#d4e157',
//   500: '#cddc39',
//   600: '#c0ca33',
//   700: '#afb42b',
//   800: '#9e9d24',
//   900: '#827717',
//   A100: '#f4ff81',
//   A200: '#eeff41',
//   A400: '#c6ff00',
//   A700: '#aeea00',
// };

// const grey = {
//   50: '#fafafa',
//   100: '#f5f5f5',
//   200: '#eeeeee',
//   300: '#e0e0e0',
//   400: '#bdbdbd',
//   500: '#9e9e9e',
//   600: '#757575',
//   700: '#616161',
//   800: '#424242',
//   900: '#212121',
//   A100: '#f5f5f5',
//   A200: '#eeeeee',
//   A400: '#bdbdbd',
//   A700: '#616161',
// };

const breakpoints = createBreakpoints({
  values: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
  },
});

export const theme = createTheme({
  breakpoints,
  palette: {
    // primary: lightBlue,
    primary: {
      main: '#0288d1',
    },
    // secondary: {
    //   main: '#c0ca33',
    // },
    // secondary: {
    //   main: '#ccff90',
    // },
    secondary: {
      main: '#69f0ae',
    },
    // secondary: lime,
    // error: grey,
  },
  components: {
    MuiTextField: {
      defaultProps: {
        size: 'small',
        variant: 'outlined',
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: '10px',
        },
        sizeSmall: {
          borderRadius: '10px',
        },
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: 'action' },
          style: {
            textTransform: 'none',
            borderRadius: 0,
            textDecoration: 'none',
            height: '100%',
            fontSize: 12,
            // '&.Mui-disabled': {
            //   backgroundColor: GREY_COLOR,
            //   color: GREY_COLO2,
            // },
          },
        },
      ],

      defaultProps: {
        variant: 'contained',
      },

      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'none',
          fontWeight: 700,
        },
        sizeSmall: {
          borderRadius: '10px',
          textTransform: 'none',
        },
        sizeLarge: {
          borderRadius: '8px',
          textTransform: 'none',
          height: 40,
          [breakpoints.up('xs')]: {
            fontSize: 14,
            padding: '8px',
          },
          [breakpoints.up('lg')]: {
            fontSize: 18,
            padding: '8px 16px',
          },
        },
        // containedCustomGrey: {
        //   '&:hover': {
        //     color: 'white',
        //   },
        // },
        // outlinedCustomGrey: {
        //   borderColor: GREY_COLO2,
        //   color: GREY_COLO2,
        // },
      },
    },
  },
});

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    action: true;
  }
}
