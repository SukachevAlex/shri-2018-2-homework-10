import { cn } from '@bem-react/classname';
import * as React from 'react';

import { Copyright } from '../Copyright/Copyright';
import { Link } from '../Nav/Link/index';
import { Nav } from '../Nav/Nav';
import navLinks from './NavLinks';

import './Footer.css';

const cnFooter = cn('Footer');
const cnFooterArea = cn('FooterArea');

export interface IFooterProps {
  className?: string;
}

const NavItems = navLinks.map((item, index) => {
  return <Link url={item.url} target="_self" text={item.text} size="small" key={item.text}/>
});

export const Footer: React.SFC<IFooterProps> = (props) => (
  <footer className={cnFooter({},[props.className])}>
    <div className={cnFooterArea()}>
      <Nav className={cnFooterArea('Nav')}>
        {NavItems}
      </Nav>
      <Copyright />
    </div>
  </footer>
);
