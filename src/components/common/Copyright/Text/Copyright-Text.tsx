import { cn } from '@bem-react/classname';
import * as React from 'react';
import { Link } from '../../Nav/Link/Nav-Link';

import './Copyright-Text.css';

const cnCopyright = cn('Copyright');

export interface ICopyrightTextProps {
  className?: string;
}

export const Text: React.SFC<ICopyrightTextProps> = () => (
  <p className={cnCopyright('Text')}>&copy; 2001–2017 ООО &laquo;
    <Link url="https://yandex.ru/" target="_blank" text="Яндекс"/>
    &raquo;
  </p>
);



