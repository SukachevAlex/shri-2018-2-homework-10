
import { cn } from '@bem-react/classname';
import * as React from 'react';

import './Logo-Link.css';

const cnLogo = cn('Logo');

export interface ILogoLinkProps {
  url?: string;
  target?: '_self' | '_blank';
  ariaLabel?: string;
}

export const Link: React.SFC<ILogoLinkProps> = (props) => (
  <a className={cnLogo('Link')} href={props.url} target={props.target} aria-label={props.ariaLabel}/>
);
