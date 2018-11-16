import { withBemMod } from '@bem-react/core';
import { IEventItemIconProps } from '../../EventItem-Icon.d';

import './EventItem-Icon_icon_stats.css';

export const EventItemIconStats =  withBemMod<IEventItemIconProps>('EventItem-Icon', { icon: 'stats' });
