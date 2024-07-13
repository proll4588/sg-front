import MoreVertIcon from '@mui/icons-material/MoreVert';
import { ClickAwayListener, Collapse, Grid, IconButton } from '@mui/material';
import { FC } from 'react';

import { UiMenuRowActionsProps } from './type';

export const UiMenuRowActions: FC<UiMenuRowActionsProps> = ({
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
    // backgroundColor: 'rgba(0, 0, 0, 0)',
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
            <MoreVertIcon />
          </IconButton>
        )}

        {/* <TransitionGroup>
          {!isOpen ? (
            <></>
          ) : Array.isArray(component) ? (
            // <Grid
            //   container
            //   flexDirection={'row'}
            //   flexWrap='nowrap'
            //   sx={{ height: '100%', minWidth: [80, 125] }}
            // >
            component.map((comp, i) => {
              return (
                <Collapse
                  orientation={'horizontal'}
                  sx={collapsSx}
                  key={i}
                >
                  {comp}
                </Collapse>
              );
            })
          ) : (
            // </Grid>
            <Collapse
              // in={isOpen}
              sx={collapsSx}
              orientation={'horizontal'}
            >
              {component}
            </Collapse>
          )}
        </TransitionGroup> */}

        <Collapse
          in={isOpen}
          sx={collapsSx}
          orientation={'horizontal'}
        >
          <Grid
            container
            flexDirection={'row'}
            flexWrap='nowrap'
            sx={{ height: '100%', minWidth: [80, 125] }}
          >
            {renderActions(isOpen)}
          </Grid>
        </Collapse>
      </Grid>
    </ClickAwayListener>
  );
};
