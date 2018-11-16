import { withBemMod } from '@bem-react/core';
import { IPlayerRangeProps } from '../Player-Range';

import './Player-Range_time.css';

export const PlayerRangeTime =  withBemMod<IPlayerRangeProps>('Player-Range', { time: true });
