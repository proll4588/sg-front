import { Grid } from '@mui/material';
import { FC, memo } from 'react';

import { UiSearchBarProps } from './type';
import { UiInputSearch } from '../UiInputSearch';

export const UiSearchBar: FC<UiSearchBarProps> = memo(
  ({ children, containterProps, ...props }) => {
    return (
      <Grid
        container
        gap={1}
        width={'100%'}
        {...containterProps}
      >
        <Grid flexGrow={1}>
          <UiInputSearch {...props} />
        </Grid>
        <Grid
          width={'fit-content'}
          container
          gap={1}
          flexShrink={1}
        >
          {children}
        </Grid>
      </Grid>
    );
  }
);
