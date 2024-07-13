import { SxProps, Theme } from '@mui/material';

export const SX_CONTAINER_ACTIONS: SxProps<Theme> = {
  display: 'flex',
  flexWrap: 'wrap',
  '& > .MuiButtonBase-root': {
    borderRadius: 0,
    flexGrow: 1,
    maxWidth: '50%',
  },
};

export const SX_PAPER: SxProps<Theme> = {
  maxWidth: '400px',
  p: [0, 0],
  width: '100%',
  margin: [1, 4],
};
