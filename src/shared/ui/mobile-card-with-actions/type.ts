import { PaperProps, StackProps } from '@mui/material';
import { ReactNode } from 'react';

export type PropsWrapper = {
  children: ReactNode | ReactNode[];
};

export interface MobileCardWithActionsProps {
  /**
   * ХЗ
   */
  id: number | string;

  /**
   * Компоненты экшины для данного компонента
   */
  renderActions?: (
    isOpen: boolean,
    setIsLoading: (loading: boolean) => void
  ) => ReactNode | ReactNode[];

  /**
   * Тело компонента. Обёрнуто в Stack
   */
  children: ReactNode | ReactNode[];

  /**
   * Сварачеваемы ли компонент
   */
  collapsedVariant?: boolean;

  /**
   * Пропсы для Stack, который оборавчивает children
   */
  stackProps?: StackProps;

  /**
   * Высока тела в свёрнутом состоянии (px)
   */
  collapsedSize?: number;
  headChildren?: ReactNode;
  paperProps?: PaperProps;
}
