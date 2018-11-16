import { cn } from '@bem-react/classname';
import * as React from 'react';

import './Title.css';

const cnTitle = cn('Title');

export interface ITitleProps {
  className?: string;
  text?: string;
}

export const Title: React.SFC<ITitleProps> = (props) => (
  <h1 className={cnTitle({}, [props.className])}>{props.text}</h1>
);
