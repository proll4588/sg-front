import { Children, ReactNode } from 'react';

export const getChildrenCount = (children: ReactNode) =>
  Children.toArray(children).length;
