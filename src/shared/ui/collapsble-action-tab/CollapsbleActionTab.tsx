import { MoreVert } from '@mui/icons-material';
import {
  ClickAwayListener,
  Collapse,
  Grid,
  IconButton,
  Skeleton,
} from '@mui/material';
import { FC, useState } from 'react';

import { CollapsbleActionTabProps } from './type';

export const CollapsbleActionTab: FC<CollapsbleActionTabProps> = ({
  onClickAway,
  handlers,
  onClickContainer,
  loading = false,
  id,
  onClickIconButton,
  isOpen,
  anchorEl,
  hideIconButton = false,
  renderActions,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const collapsSx = {
    position: 'absolute',
    right: 0,
    bottom: 0,
    display: 'flex',
    flexDirection: 'row',
    height: anchorEl ? anchorEl.offsetHeight : '75px',
    width: 'max-content',
    zIndex: 2,
    backgroundColor: 'white',
    borderRadius: 1,
    overflow: 'hidden',
  };

  return (
    <ClickAwayListener
      onClickAway={onClickAway}
      mouseEvent='onMouseDown'
    >
      <Grid
        {...handlers}
        onClick={onClickContainer}
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {!hideIconButton && (
          <IconButton
            aria-label='more'
            sx={{ cursor: loading ? 'progress' : 'pointer' }}
            id={`long-button ${id}`}
            onClick={onClickIconButton}
            aria-haspopup='true'
          >
            <MoreVert />
          </IconButton>
        )}

        <Collapse
          in={isLoading}
          sx={collapsSx}
          orientation={'horizontal'}
        >
          <Grid
            container
            flexDirection={'row'}
            flexWrap='nowrap'
            sx={{ height: '100%', minWidth: [80, 125] }}
          >
            <Skeleton
              sx={{ height: '100%', minWidth: [80, 125], transform: 'none' }}
            ></Skeleton>
          </Grid>
        </Collapse>

        <Collapse
          in={isOpen && !isLoading}
          sx={collapsSx}
          orientation={'horizontal'}
        >
          <Grid
            container
            flexDirection={'row'}
            flexWrap='nowrap'
            sx={{
              height: '100%',
              minWidth: [80, 125],
            }}
          >
            {renderActions(isOpen, setIsLoading)}
          </Grid>
        </Collapse>
      </Grid>
    </ClickAwayListener>
  );
};
