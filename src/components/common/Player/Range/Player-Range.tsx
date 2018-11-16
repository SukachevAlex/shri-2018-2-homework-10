import { cn } from '@bem-react/classname';
import * as React from 'react';

import './Player-Range.css';

const cnPlayer = cn('Player');

export interface IPlayerRangeProps {
  className?: string;
  max?: number;
  min?: number;
  step?: number;
  time?: boolean;
  value?: string;
  volume?: boolean;
}

export const PlayerRange: React.SFC<IPlayerRangeProps> = ({max, min, step, value, time, volume }) => (
    <input  
      className={cnPlayer('Range', {volume, time})} 
      type="range" 
      max={max} 
      min={min} 
      step={step} 
      defaultValue={value} />
);
