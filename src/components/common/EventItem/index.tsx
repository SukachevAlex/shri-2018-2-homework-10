import { compose } from '@bem-react/core';
import { EventItem as Base } from './EventItem';

import { EventItemCritical } from './_critical/EventItem_critical';
import { EventItemSizeL } from './_size/EventItem_size_l';
import { EventItemSizeM } from './_size/EventItem_size_m';
import { EventItemSizeS } from './_size/EventItem_size_s';

export const EventItem = compose(
  EventItemSizeL,
  EventItemSizeM,
  EventItemSizeS,
  EventItemCritical
)(Base);
