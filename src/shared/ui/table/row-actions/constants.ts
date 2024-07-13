import { SxProps, Theme } from '@mui/material';

export const STYLE_STIKY_CELL: SxProps<Theme> = {
  backgroundColor: 'white',
  position: 'sticky',
  right: '0',
  zIndex: 2,
  padding: 0,
};

export const DEFAULT_SX: SxProps<Theme> = {
  minWidth: [120, 175],
  flexDirection: ['column', 'row'],
};
