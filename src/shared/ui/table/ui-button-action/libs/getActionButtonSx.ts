import { Theme } from '@emotion/react';
import { SxProps } from '@mui/material';
import { theme } from '../../../../../widget/theme';

export const getActionButtonSx = (color: string): SxProps<Theme> => {
  const colorPallet = theme.palette.augmentColor({
    color: {
      main: color,
    },
  });

  return {
    minWidth: [120, 175],
    flexDirection: ['column', 'row'],
    backgroundColor: colorPallet.light,
    color: 'white',
    '&:hover': {
      backgroundColor: colorPallet.dark,
    },
    '& > .MuiButton-startIcon': {
      margin: [0, 0.5],
    },
  };
};
