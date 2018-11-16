import { compose } from '@bem-react/core';
import { PlayerRange as Base } from './Player-Range';

import { PlayerRangeTime } from './_time/Player-Range_time';
import { PlayerRangeVolume } from './_volume/Player-Range_volume';

export const PlayerRange = compose(
  PlayerRangeTime,
  PlayerRangeVolume
)(Base);
