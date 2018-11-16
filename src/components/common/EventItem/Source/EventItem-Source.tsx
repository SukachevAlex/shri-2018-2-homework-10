import { cn } from '@bem-react/classname';
import * as React from 'react';

import './EventItem-Source.css';

const cnEventItem = cn('EventItem');

export interface IEventItemSourceProps {
  className?: string;
  source?: string;
}

export const Source: React.SFC<IEventItemSourceProps> = (props) => (
  <div className={cnEventItem('Source')}>{props.source}</div>
);
