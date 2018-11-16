import { cn } from '@bem-react/classname';
import { IClassNameProps } from '@bem-react/core';
import * as React from 'react';

import './Nav-Link.css';

const cnNav = cn('Nav');

export interface INavLinkProps extends IClassNameProps {
  active?: boolean;
  size?: 'small' | 'big';
  target?: '_self' | '_blank';
  text?: string;
  url?: string;
  ariaLabel?: string;
}

export const Link: React.SFC<INavLinkProps> = ({active, size, target, text, url, ariaLabel}) => (
<a className={cnNav('Link', {active, size})} href={url} aria-label={ariaLabel} target={target}>{text}</a>
);
