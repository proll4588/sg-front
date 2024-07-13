import { DialogProps } from '@mui/material';
import { ReactNode } from 'react';

export interface DialogForFormProps extends DialogProps {
  /**
   * @description Шапка модального окна
   */
  head?: ReactNode;
  disabledConteiner?: boolean;
}
