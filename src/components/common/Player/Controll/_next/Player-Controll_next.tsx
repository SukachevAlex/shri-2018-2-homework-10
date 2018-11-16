import { withBemMod } from '@bem-react/core';
import { IPlayerControllProps } from '../Player-Controll';

import './Player-Controll_next.css';

export const PlayerControllNext =  withBemMod<IPlayerControllProps>('Player-Controll', { next: true });
