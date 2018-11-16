import { cn } from '@bem-react/classname';
import * as React from 'react';

import './EventItem-Description.css';

const cnEventItem = cn('EventItem');

export interface IEventItemDescriptionProps {
  className?: string;
  description?: string | null;
  size?: string;
}

export const EventItemDescription: React.SFC<IEventItemDescriptionProps> = ({description, size}) => (
  <div className={cnEventItem('Description', {size})}> {description}</div>
);
