import { withBemMod } from '@bem-react/core';
import { IPlayerControllProps } from '../Player-Controll';

import './Player-Controll_prev.css';

export const PlayerControllPrev =  withBemMod<IPlayerControllProps>('Player-Controll', { prev: true });
