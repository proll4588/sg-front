import { ButtonProps } from '@mui/material';
import { ReactNode } from 'react';

export interface DialogConfirmFormProps {
  /**
   * @description показать/скрыть диалоговое окно
   */
  open: boolean;

  /**
   * @description callback - вызывается при нажатии - "отменить" и вне DialogConfirmForm
   */
  onClose: () => void;

  /**
   * @description callback - вызывается при нажатии - "Подтвердить"
   * @returns unknown
   */
  onConfirmation: () => unknown;

  /**
   * @description передавать если отправляется запрос для подтверждения
   */
  isLoading?: boolean;

  /**
   * @description Заголовок формы
   */
  title?: string;

  /**
   * @description Текст кнопки подтвердить
   * @default Подтвердить
   */
  textConfirmAction?: string;

  /**
   * @description Тело диалогового окна
   */
  children?: ReactNode;

  /**
   * @description Цвет кнопки подтверждения
   */
  actionButtonColor?: ButtonProps['color'];

  /**
   * @description Цвет второй кнопки подтверждения
   */
  secondaryButtonColor?: ButtonProps['color'];

  /**
   * @description Текст второй кнопки подтверждения
   */
  secondaryTextConfirmAction?: string;

  /**
   * @description callback - вызывается при нажатии второй кнопки подтверждения
   * @returns unknown
   */
  onSecondaryConfirm?: () => unknown;
}
