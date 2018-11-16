import { withBemMod } from '@bem-react/core';
import { IPlayerRangeProps } from '../Player-Range';

import './Player-Range_volume.css';

export const PlayerRangeVolume =  withBemMod<IPlayerRangeProps>('Player-Range', { volume: true });
