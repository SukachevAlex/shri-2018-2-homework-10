import { compose } from '@bem-react/core';
import { Link as Base } from './Nav-Link';

import { NavLinkSizeBig } from './_size/Nav-Link_size_big';
import { NavLinkSizeSmall } from './_size/Nav-Link_size_small';

import { NavLinkActive } from './_active/Nav-Link_active';

export const Link = compose(
  NavLinkSizeBig,
  NavLinkSizeSmall,
  NavLinkActive,
)(Base);
