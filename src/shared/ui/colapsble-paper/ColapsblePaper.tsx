import { KeyboardArrowDown } from '@mui/icons-material';
import { Box, Collapse, Grid, IconButton, Paper } from '@mui/material';
import { FC, useEffect, useState } from 'react';

import { ColapsblePaperProps } from './type';

export const ColapsblePaper: FC<ColapsblePaperProps> = ({
  children,
  paperProps,
  collapsedSize = 0,
  onCollapsChange,
  headChildren,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleColaps = () => {
    setIsCollapsed((prev) => !prev);
  };

  useEffect(() => {
    onCollapsChange && onCollapsChange(isCollapsed);
  }, [isCollapsed]);

  return (
    <Paper
      {...paperProps}
      component={Grid}
      container
      flexDirection={'row'}
    >
      <Grid
        container
        justifyContent={headChildren ? 'space-between' : 'flex-end'}
        alignItems={'center'}
        onClick={toggleColaps}
      >
        <Box>{headChildren}</Box>

        <IconButton
          onClick={(e) => {
            e.stopPropagation();
            toggleColaps();
          }}
          sx={{
            transition: '0.2s ease',
            rotate: isCollapsed ? '0deg' : '180deg',
          }}
        >
          <KeyboardArrowDown />
        </IconButton>
      </Grid>

      <Collapse
        in={!isCollapsed}
        collapsedSize={collapsedSize}
        sx={{
          width: '100%',
        }}
      >
        {children}
      </Collapse>
    </Paper>
  );
};
