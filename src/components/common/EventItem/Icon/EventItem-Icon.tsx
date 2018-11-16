import { cn } from '@bem-react/classname';
import * as React from 'react';

import './EventItem-Icon.css';
import { IEventItemIconProps } from './EventItem-Icon.d';

const cnEventItem = cn('EventItem');

export const Icon: React.SFC<IEventItemIconProps> = ({icon}) => (
  <div className={cnEventItem('Icon', {icon})} />
);
