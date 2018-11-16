import { cn } from '@bem-react/classname';
import * as React from 'react';

import './Player-Controll.css';

const cnPlayer = cn('Player');

export interface IPlayerControllProps {
  className?: string;
  prev?: boolean;
  next?: boolean;
}

export const PlayerControll: React.SFC<IPlayerControllProps> = ({prev, next}) => (
  <button className={cnPlayer('Controll', {prev, next})} />
);
