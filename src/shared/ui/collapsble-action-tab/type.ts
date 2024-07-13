import { ReactNode } from 'react';
import { SwipeableHandlers } from 'react-swipeable';

export interface CollapsbleActionTabProps {
  /**
   * ref на элемент к которому прикрепляется компонент
   */
  anchorEl?: HTMLElement | null;

  /**
   * При клике вне компонента
   */
  onClickAway: (event: MouseEvent | TouchEvent) => void;

  /**
   * Обработчик свайпа
   */
  handlers?: SwipeableHandlers;

  /**
   * При клике внутри компонента
   */
  onClickContainer?: React.MouseEventHandler<HTMLDivElement>;

  /**
   *
   */
  loading?: boolean;

  /**
   *
   */
  id: number | string;

  /**
   * При нажатии на кнопку
   */
  onClickIconButton: React.MouseEventHandler<HTMLButtonElement> | undefined;

  /**
   * Открыт?
   */
  isOpen: boolean;

  /**
   * Скрыть кнопку
   */
  hideIconButton?: boolean;

  /**
   * Функция рендера эшинов
   */
  renderActions: (
    isOpen: boolean,
    setIsLoading: (loading: boolean) => void
  ) => ReactNode | ReactNode[];
}
