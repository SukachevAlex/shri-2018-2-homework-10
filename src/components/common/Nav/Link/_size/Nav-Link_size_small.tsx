import { withBemMod } from '@bem-react/core';
import { INavLinkProps } from '../Nav-Link';

import './Nav-Link_size_small.css';

export const NavLinkSizeSmall = withBemMod<INavLinkProps>('Nav-Link', {size: 'small'});