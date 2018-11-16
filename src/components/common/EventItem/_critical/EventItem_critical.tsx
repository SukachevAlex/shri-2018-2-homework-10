import { withBemMod } from '@bem-react/core';
import { IEventItemProps } from '../EventItem';

import './EventItem_critical.css';

export const EventItemCritical =  withBemMod<IEventItemProps>('EventItem', { critical: true });
