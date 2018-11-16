import { cn } from '@bem-react/classname';
import * as React from 'react';
import { Burger } from '../Burger/Burger';
import { Logo } from '../Logo/Logo';

import './Header.css';

const cnHeader = cn('Header');
const cnHeaderArea = cn('HeaderArea');

export interface IHeaderProps {
  className?: string;
}

export const Header: React.SFC<IHeaderProps> = (props) => (
  <div className={cnHeader({},[props.className])}>
    <div className={cnHeaderArea()}>
      <Logo className={cnHeaderArea('Logo')} ariaLabel="Логотип Яндекс Дом"/>
      <Burger />
    </div>
  </div>
);
