import { compose } from '@bem-react/core';
import { PlayerControll as Base } from './Player-Controll';

import { PlayerControllNext } from './_next/Player-Controll_next';
import { PlayerControllPrev } from './_prev/Player-Controll_prev';

export const PlayerControll = compose(
  PlayerControllNext,
  PlayerControllPrev
)(Base);
