import { withBemMod } from '@bem-react/core';
import { IEventItemProps } from '../EventItem';

import './EventItem_size_s.css';

export const EventItemSizeS =  withBemMod<IEventItemProps>('EventItem', { size: 's' });
