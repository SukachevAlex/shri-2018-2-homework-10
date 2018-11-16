
import { cn } from '@bem-react/classname';
import * as React from 'react';
import { Link } from './Link/Logo-Link';

import './Logo.css';

const cnLogo = cn('Logo');

export interface ILogoProps {
  className?: string;
  ariaLabel?: string;
}

export const Logo: React.SFC<ILogoProps> = (props) => (
  <div className={cnLogo({}, [props.className])}>
    <Link url="#" target="_self" ariaLabel={props.ariaLabel} />
  </div>
);
