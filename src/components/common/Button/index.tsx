import { compose } from '@bem-react/core';
import { Button as Base } from './Button';

import { ButtonActive } from './_active/Button_active';

export const Button = compose(
  ButtonActive
)(Base);
