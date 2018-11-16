
import { cn } from '@bem-react/classname';
import * as React from 'react';
import { Burger } from '../Burger/Burger';
import navLinks from '../Header/NavLinks';
import { Logo } from '../Logo/Logo';
import { Link } from '../Nav/Link/index';
import { Nav } from '../Nav/Nav';

import './Header.css';

const cnHeader = cn('Header');
const cnHeaderArea = cn('HeaderArea');

export interface IHeaderProps {
  className?: string;
}

const NavItems = navLinks.map((item, index) => {
  return <Link url={item.url} target="_self" text={item.text} size="big" active={!index} key={item.text} /> 
});

export const Header: React.SFC<IHeaderProps> = (props) => (
  <div className={cnHeader({},[props.className])}>
    <div className={cnHeaderArea()}>
      <Logo className={cnHeaderArea('Logo')} ariaLabel="Логотип Яндекс Дом"/>
      <Nav className={cnHeaderArea('Nav')}>
        {NavItems}
      </Nav>
      <Burger />
    </div>
  </div>
);

