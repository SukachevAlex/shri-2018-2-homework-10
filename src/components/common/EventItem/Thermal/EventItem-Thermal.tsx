import { cn } from '@bem-react/classname';
import * as React from 'react';

import './EventItem-Thermal.css';

const cnEventItem = cn('EventItem');

export interface IEventItemThermalProps {
  className?: string;
  humidity: number;
  temperature: number;
}

export const Thermal: React.SFC<IEventItemThermalProps> = ({humidity, temperature}) => (
  <div className={cnEventItem('Thermal')}>
    <div className={cnEventItem('ThermalTemperature')}>
        Температура: <span className={cnEventItem('ThermalTemperatureVal')}>{temperature} C</span>
    </div>
    <div className={cnEventItem('ThermalHumidity')}>
        Влажность: <span className={cnEventItem('ThermalHumidityVal')}>{humidity}%</span>
    </div>
  </div>
);
