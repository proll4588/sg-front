import { Button, Typography } from '@mui/material';
import { FC } from 'react';

import { getActionButtonSx } from './libs/getActionButtonSx';
import { UiButtonActionProps } from './type';
import { theme } from '../../../../widget/theme';

export const UiButtonAction: FC<UiButtonActionProps> = ({
  disable = false,
  icon,
  text,
  onClick,
  color = theme.palette.primary.main,
}) => {
  return (
    <Button
      disabled={disable}
      onClick={onClick}
      sx={getActionButtonSx(color)}
      variant='action'
      startIcon={icon}
    >
      <Typography fontSize={12}>{text}</Typography>
    </Button>
  );
};
