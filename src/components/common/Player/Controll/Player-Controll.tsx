import { cn } from '@bem-react/classname';
import * as React from 'react';

import './Player-Controll.css';

const cnPlayer = cn('Player');

export interface IPlayerControllProps {
  className?: string;
  prev?: boolean;
  next?: boolean;
}

export const PlayerControll: React.SFC<IPlayerControllProps> = ({prev, next}) => {
  
  const ariaLabel = `${prev ? 'Предыдущая' : next ? 'Следующая' : 'Unknown'} композиция`;

  return (
    <button className={cnPlayer('Controll', {prev, next})} role="button" aria-label={ariaLabel} tabIndex={0} />
  );
}
