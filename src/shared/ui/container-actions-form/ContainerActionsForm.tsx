import Grid from '@mui/material/Grid/Grid';
import { useEffect, useState } from 'react';

import { SX_COUNTS_CHILDREN } from './constants';
import { getChildrenCount } from './getChildrenCount';
import { ContainerActionsFormComponent } from './type';

export const ContainerActionsForm: ContainerActionsFormComponent = ({
  children,
}) => {
  const [countChildren, setCountChildren] = useState(
    getChildrenCount(children)
  );

  useEffect(() => {
    setCountChildren(getChildrenCount(children));
  }, [children]);

  useEffect(() => {
    if (countChildren > 3) {
      throw new Error('ВНИМАНИЕ! Container поддерживает до 3х children');
    }
  }, [countChildren]);

  return (
    <Grid
      container
      gap={[0, 1]}
      justifyContent={'space-between'}
      sx={{
        position: ['fixed', 'inherit'],
        bottom: 0,
        left: 0,
        backgroundColor: 'white',
        zIndex: 10,
        ...SX_COUNTS_CHILDREN[countChildren],
      }}
    >
      {children}
    </Grid>
  );
};
