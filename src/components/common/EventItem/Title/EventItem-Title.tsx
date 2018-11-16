import { cn } from '@bem-react/classname';
import * as React from 'react';

import './EventItem-Title.css';

const cnEventItem = cn('EventItem');

export interface IEventItemTitleProps {
  className?: string;
  title?: string;
}

export const Title: React.SFC<IEventItemTitleProps> = (props) => (
  <div className={cnEventItem('Title')}>{props.title}</div>
);
