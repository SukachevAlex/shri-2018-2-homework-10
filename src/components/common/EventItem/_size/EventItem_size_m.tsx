import { withBemMod } from '@bem-react/core';
import { IEventItemProps } from '../EventItem';

import './EventItem_size_m.css';

export const EventItemSizeM =  withBemMod<IEventItemProps>('EventItem', { size: 'm' });
