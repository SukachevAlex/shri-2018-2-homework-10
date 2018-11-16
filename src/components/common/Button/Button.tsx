import { cn } from '@bem-react/classname';
import * as React from 'react';

import './Button.css';

const cnButton = cn('Button');

export interface IButtonProps {
  className?: string;
  text?: string;
  active?: boolean;
  mix?: string;
}

export const Button: React.SFC<IButtonProps> = ({active, text, mix}) =>  {
  return (
    <div className={[cnButton({active}), mix].join(' ')}>{text}</div>
  );
}
