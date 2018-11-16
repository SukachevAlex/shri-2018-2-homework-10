import { cn } from '@bem-react/classname';
import * as React from 'react';

import './Burger.css';

const cnBurger = cn('Burger');

export interface IBurgerProps {
  className?: string;
}

export const Burger: React.SFC<IBurgerProps> = () => (
  <div className={cnBurger()} />
);
