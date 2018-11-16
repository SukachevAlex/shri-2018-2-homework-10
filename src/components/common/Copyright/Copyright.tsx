import { cn } from '@bem-react/classname';
import * as React from 'react';
import { Text } from './Text/Copyright-Text';

import './Copyright.css';

const cnCopyright = cn('Copyright');

export interface ICopyrightProps {
  className?: string;
}

export const Copyright: React.SFC<ICopyrightProps> = () => (
  <div className={cnCopyright()}>
    <Text />
  </div>
);
