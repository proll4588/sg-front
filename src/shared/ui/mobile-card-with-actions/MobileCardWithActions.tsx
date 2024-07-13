import { Grid, Paper, PaperProps, Stack } from '@mui/material';
import { FC, useMemo, useState } from 'react';
import { useSwipeable } from 'react-swipeable';

import { CollapsbleActionTab } from '../collapsble-action-tab';
import { MobileCardWithActionsProps, PropsWrapper } from './type';
import { ColapsblePaper } from '../colapsble-paper';

/**
 * Карточка с экшинами для мобилок
 */
export const MobileCardWithActions: FC<MobileCardWithActionsProps> = ({
  children,
  id,
  renderActions,
  collapsedVariant = true,
  stackProps,
  collapsedSize = 125,
  headChildren,
  paperProps: paperPropsP,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const open = () => {
    setIsOpen(true);
  };
  const close = () => {
    setIsOpen(false);
  };

  const handlers = useSwipeable({
    trackMouse: true,
    trackTouch: true,
    preventScrollOnSwipe: true,
    onSwipedLeft: (e) => {
      e.event.stopPropagation();
      renderActions && open();
    },
    onSwipedRight: () => {
      renderActions && close();
    },
  });

  // Выбор обёртки для тела (сворачиваемая или нет)
  const Wrapper = useMemo(() => {
    const paperProps: PaperProps = {
      elevation: 2,
      ...handlers,
      ...paperPropsP,
      ref: setAnchorEl,
      sx: {
        ...paperPropsP?.sx,
        position: 'relative',
      },
    };

    return (props: PropsWrapper) =>
      collapsedVariant ? (
        <ColapsblePaper
          paperProps={paperProps}
          collapsedSize={collapsedSize}
          headChildren={headChildren}
        >
          {props.children}
        </ColapsblePaper>
      ) : (
        <Paper {...paperProps}>
          {headChildren && (
            <Grid
              container
              alignItems={'center'}
            >
              {headChildren}
            </Grid>
          )}
          {props.children}
        </Paper>
      );
  }, [collapsedVariant, handlers, setAnchorEl, collapsedSize, headChildren]);

  return (
    <Wrapper>
      <Grid {...handlers}>
        <Stack
          gap={1}
          {...stackProps}
        >
          {children}
        </Stack>

        {renderActions && (
          <CollapsbleActionTab
            hideIconButton
            renderActions={renderActions}
            id={id}
            isOpen={isOpen}
            onClickAway={close}
            onClickIconButton={open}
            handlers={handlers}
            anchorEl={anchorEl}
          />
        )}
      </Grid>
    </Wrapper>
  );
};
