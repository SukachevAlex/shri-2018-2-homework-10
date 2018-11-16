import { withBemMod } from '@bem-react/core';
import { IEventItemIconProps } from '../../EventItem-Icon.d';

import './EventItem-Icon_icon_router.css';

export const EventItemIconRouter =  withBemMod<IEventItemIconProps>('EventItem-Icon', { icon: 'router' });
