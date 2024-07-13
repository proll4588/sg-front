import { ReactNode } from 'react';
import { SwipeableHandlers } from 'react-swipeable';

export interface UiMenuRowActionsProps {
  anchorEl?: HTMLElement | null;
  onClickAway: (event: MouseEvent | TouchEvent) => void;
  handlers?: SwipeableHandlers;
  onClickContainer?: React.MouseEventHandler<HTMLDivElement>;
  loading?: boolean;
  id: number | string;
  onClickIconButton: React.MouseEventHandler<HTMLButtonElement> | undefined;
  isOpen: boolean;
  hideIconButton?: boolean;
  renderActions: (isOpen: boolean) => ReactNode | ReactNode[];
}
