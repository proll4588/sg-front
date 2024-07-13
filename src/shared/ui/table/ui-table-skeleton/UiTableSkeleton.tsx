import { Skeleton, TableCell, TableRow } from '@mui/material';
import { FC } from 'react';

interface UiTableSkeletonProps {
  limit: number;
}
export const UiTableSkeleton: FC<UiTableSkeletonProps> = ({ limit }) => {
  return (
    <>
      {new Array(limit).fill(1).map((_, i) => (
        <TableRow key={i}>
          <TableCell colSpan={100}>
            <Skeleton
              variant='rounded'
              height={24}
            />
          </TableCell>
        </TableRow>
      ))}
    </>
  );
};
