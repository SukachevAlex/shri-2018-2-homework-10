import { withBemMod } from '@bem-react/core';
import { INavLinkProps } from '../Nav-Link';

import './Nav-Link_size_big.css';

export const NavLinkSizeBig = withBemMod<INavLinkProps>('Nav-Link', {size: 'big'});