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
  ariaLabel?: string;
}

export const PlayerRange: React.SFC<IPlayerRangeProps> = ({max, min, step, value, time, volume }) => {

  const ariaLabel = `Слайдер ${volume ? ' громкости' : time ? 'времени' : ''}`;

  return (
    <input  
    className={cnPlayer('Range', {volume, time})} 
    type="range" 
    max={max} 
    min={min} 
    step={step} 
    defaultValue={value} 
    aria-label={ariaLabel}/>
  );
}
