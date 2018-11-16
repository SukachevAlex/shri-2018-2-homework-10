import { compose } from '@bem-react/core';
import { Icon as Base } from './EventItem-Icon';

import { EventItemIconAc } from './_icon/_ac/EventItem-Icon_icon_ac';
import { EventItemIconBattery } from './_icon/_battery/EventItem-Icon_icon_battery';
import { EventItemIconCam } from './_icon/_cam/EventItem-Icon_icon_cam';
import { EventItemIconFridge } from './_icon/_fridge/EventItem-Icon_icon_fridge';
import { EventItemIconKettle } from './_icon/_kettle/EventItem-Icon_icon_kettle';
import { EventItemIconKey } from './_icon/_key/EventItem-Icon_icon_key';
import { EventItemIconMusic } from './_icon/_music/EventItem-Icon_icon_music';
import { EventItemIconRobotCleaner } from './_icon/_robotCleaner/EventItem-Icon_icon_robotCleaner';
import { EventItemIconRouter } from './_icon/_router/EventItem-Icon_icon_router';
import { EventItemIconStats } from './_icon/_stats/EventItem-Icon_icon_stats';
import { EventItemIconThermal } from './_icon/_thermal/EventItem-Icon_icon_thermal';

export const Icon = compose(
  EventItemIconAc,
  EventItemIconBattery,
  EventItemIconCam,
  EventItemIconFridge,
  EventItemIconKettle,
  EventItemIconKey,
  EventItemIconMusic,
  EventItemIconRobotCleaner,
  EventItemIconRouter,
  EventItemIconStats,
  EventItemIconThermal
)(Base);
