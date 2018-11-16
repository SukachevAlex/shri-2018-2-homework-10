import { cn } from '@bem-react/classname';
import * as React from 'react';

import './EventItem-Graph.css';
import chart from './Richdata.png';

const cnEventItem = cn('EventItem');

export interface IEventItemGraphProps {
  className?: string;
}

export const Graph: React.SFC<IEventItemGraphProps> = () => (
  <img className={cnEventItem('Graph')} src={chart} alt="Chart" />
);
