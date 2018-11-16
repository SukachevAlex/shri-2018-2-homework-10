import { cn } from '@bem-react/classname';
import * as React from 'react';

import './EventItem-Time.css';

const cnEventItem = cn('EventItem');

export interface IEventItemTimeProps {
  className?: string;
  time?: string;
}

export const Time: React.SFC<IEventItemTimeProps> = (props) => (
  <div className={cnEventItem('Time')}>{props.time}</div>
);
