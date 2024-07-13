import { SxProps, Theme } from '@mui/material/styles';

const BORDER_RADIUS = [0, '10px'];
const SX_CHILDREN_BASE = { borderRadius: BORDER_RADIUS };

export const SX_COUNTS_CHILDREN: { [key in number]: SxProps<Theme> } = {
  1: {
    '& > *:nth-of-type(1)': {
      ...SX_CHILDREN_BASE,
      flexBasis: ['100%'],
    },
  },
  2: {
    '& > *:nth-of-type(1)': {
      ...SX_CHILDREN_BASE,
      flexBasis: ['100%', '49%'],
      mb: [1, 0],
    },
    '& > *:nth-of-type(2)': {
      ...SX_CHILDREN_BASE,
      flexBasis: ['100%', '49%'],
    },
  },
  3: {
    '& > *:nth-of-type(1)': {
      ...SX_CHILDREN_BASE,
      flexBasis: ['100%', '32%'],
      mb: [1, 0],
    },

    '& > *:nth-of-type(2)': {
      ...SX_CHILDREN_BASE,
      flexBasis: ['50%', '32%'],
    },
    '& > *:nth-of-type(3)': {
      ...SX_CHILDREN_BASE,
      flexBasis: ['50%', '32%'],
    },
  },
};
