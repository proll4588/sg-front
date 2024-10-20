import { Backdrop, CircularProgress } from '@mui/material';
import { FC } from 'react';

import { CustomBackdropProps } from './type';

export const CustomBackdrop: FC<CustomBackdropProps> = ({ isLoading, sx }) => {
  return (
    <Backdrop
      sx={{ ...sx, color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={isLoading}
    >
      <CircularProgress color='inherit' />
    </Backdrop>
  );
};
