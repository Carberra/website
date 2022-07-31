import { createTheme } from '@mui/material/styles';

import twConfig from '@base/tailwind.config';

export const muiTheme = createTheme({
  palette: {
    primary: {
      main: '#1987bd',
    },
    secondary: {
      main: '#9e1cf3',
    },
    mode: 'dark',
  },
  typography: {
    fontFamily: twConfig.theme.extend.fontFamily.sans.join(','),
  },
});
