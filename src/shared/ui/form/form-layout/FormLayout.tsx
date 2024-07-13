import { Grid } from '@mui/material';
import { FC } from 'react';

import { FormLayoutProps } from './type';
import { ContainerActionsForm } from '../../container-actions-form';

export const FormLayout: FC<FormLayoutProps> = ({ actions, ...props }) => {
  return (
    <Grid
      position={'relative'}
      pb={[12, 0]}
      component={'form'}
      container
      flexDirection={'column'}
      flexWrap={'nowrap'}
      gap={[0.5, 2]}
      {...props}
    >
      {props.children}

      <ContainerActionsForm>{actions}</ContainerActionsForm>
    </Grid>
  );
};
