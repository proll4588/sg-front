import { Typography } from '@mui/material';
import { FC } from 'react';

import { DialogTitleForFormProps } from './type';

export const DialogTitleForForm: FC<DialogTitleForFormProps> = ({ title }) => {
  return (
    <Typography
      fontWeight={'bold'}
      fontSize={[20, 24]}
      pl={[1, 0]}
      mt={[1, 0]}
    >
      {title}
    </Typography>
  );
};
