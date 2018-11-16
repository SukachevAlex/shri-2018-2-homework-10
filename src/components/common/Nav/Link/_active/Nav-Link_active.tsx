import { withBemMod } from '@bem-react/core';
import { INavLinkProps } from '../Nav-Link';

import './Nav-Link_active.css';

export const NavLinkActive = withBemMod<INavLinkProps>('Nav-Link', {active: true});