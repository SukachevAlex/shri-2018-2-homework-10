import { withBemMod } from '@bem-react/core';
import { IEventItemIconProps } from '../../EventItem-Icon.d';

import './EventItem-Icon_icon_music.css';

export const EventItemIconMusic =  withBemMod<IEventItemIconProps>('EventItem-Icon', { icon: 'music' });
