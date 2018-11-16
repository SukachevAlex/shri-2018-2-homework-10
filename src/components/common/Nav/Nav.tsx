import { cn } from '@bem-react/classname';
import * as React from 'react';

import './Nav.css';

const cnNav = cn('Nav');

export interface INavProps {
  className?: string;
}

export const Nav: React.SFC<INavProps> = (props) => (
  <div className={cnNav({},[props.className])}>
    {props.children}
  </div>
);
