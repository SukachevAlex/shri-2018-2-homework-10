import { cn } from '@bem-react/classname';
import * as React from 'react';

import './Title.css';

const cnTitle = cn('Title');

export interface ITitleProps {
  className?: string;
  text?: string;
}

export const Title: React.SFC<ITitleProps> = (props) => (
  <div className={cn('TitleArea')()} role="heading" aria-level={1} tabIndex={0}>
    <h1 className={cnTitle({}, [props.className])} >{props.text}</h1>
  </div>
);
