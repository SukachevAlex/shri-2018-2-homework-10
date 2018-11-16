import { withBemMod } from '@bem-react/core';
import { IEventItemProps } from '../EventItem';

import './EventItem_size_l.css';

export const EventItemSizeL =  withBemMod<IEventItemProps>('EventItem', { size: 'l' });
