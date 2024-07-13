import { Grid, Skeleton, Stack } from '@mui/material';

import { UiTableCardListFunction } from './type';

export const UiTableCardList: UiTableCardListFunction = ({
  pagination,
  children,
  containerProps,
  stackContainerProps,
  header,
  isLoading,
}) => {
  return (
    <Grid
      container
      flexDirection={'column'}
      gap={0.5}
      {...containerProps}
    >
      <Grid
        container
        flexDirection={'row'}
        justifyContent={'space-between'}
        gap={2}
      >
        {header}
      </Grid>

      <Stack
        gap={2}
        {...stackContainerProps}
      >
        {isLoading ? (
          <>
            {new Array(5).fill(0).map((_, index) => {
              return (
                <Skeleton
                  variant='rectangular'
                  key={index}
                  height={140}
                />
              );
            })}
          </>
        ) : (
          children
        )}
      </Stack>

      {pagination}
    </Grid>
  );
};
