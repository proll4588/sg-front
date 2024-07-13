import { Dialog, Grid } from '@mui/material';
import { FC } from 'react';
import { DialogForFormProps } from './type';
import { useDevice } from '../../../hooks/useDevice';

export const DialogForForm: FC<DialogForFormProps> = ({
  children,
  head,
  disabledConteiner,
  ...props
}) => {
  const [isMobile] = useDevice();

  return (
    <Dialog
      PaperProps={{ sx: { maxWidth: '600px', p: [0, 3], width: '100%' } }}
      fullScreen={isMobile}
      {...props}
    >
      <Grid
        container={disabledConteiner ? false : true}
        flexDirection={'column'}
        gap={2}
      >
        {head}
        {children}
      </Grid>
    </Dialog>
  );
};
