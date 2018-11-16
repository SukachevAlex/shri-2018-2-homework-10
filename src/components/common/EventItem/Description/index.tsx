import { compose } from '@bem-react/core';
import { EventItemDescription as Base } from './EventItem-Description';

import { EventItemDescriptionSizeBig } from './_size/EventItem-Description_size_big';


export const EventItemDescription = compose(
  EventItemDescriptionSizeBig
)(Base);
