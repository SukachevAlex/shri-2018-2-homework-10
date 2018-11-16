import { cn } from '@bem-react/classname';
import * as React from 'react';

import img from './Bitmap.png';
import './Camera.css';
import { Info } from './Info/Camera-Info';

const cnCamera = cn('Camera');


export interface ICameraProps {
  className?: string;
  link?: string;
}

export const Camera: React.SFC<ICameraProps> = (props) => (
  <div className={cnCamera()}>
    <img className={cnCamera('Image')} src={img} alt={props.link} />
    <Info />
  </div>
);
