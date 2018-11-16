import { cn } from '@bem-react/classname';
import * as React from 'react';

import './Camera-Info.css';

const cnCamera = cn('Camera');

export interface ICameraInfoProps {
  className?: string;
}

export const Info: React.SFC<ICameraInfoProps> = () => (
  <div className={cnCamera('Info')}>
    <div className={cnCamera('InfoZoom')}>
      Приближение: 
      <span className={cnCamera('InfoZoomValue')}>78</span>%
    </div>
    <div className={cnCamera('InfoBrightness')}>
      Яркость: 
      <span className={cnCamera('InfoBrightnessValue')}>50</span>%
    </div>
  </div>
);