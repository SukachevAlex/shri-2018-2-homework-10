import { withBemMod } from '@bem-react/core';
import { IEventItemIconProps } from '../../EventItem-Icon.d';

import './EventItem-Icon_icon_battery.css';

export const EventItemIconBattery =  withBemMod<IEventItemIconProps>('EventItem-Icon', { icon: 'battery' });
