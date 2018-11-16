import { cn } from '@bem-react/classname';
import * as React from 'react';

import img from './AlbumCover.png';
import './Player-AlbumCover.css';

const cnPlayer = cn('Player');

export interface IPlayerAlbumCoverProps {
  className?: string;
}

export const AlbumCover: React.SFC<IPlayerAlbumCoverProps> = (props) => (
  <img className={cnPlayer('AlbumCover')} src={img} alt="Album cover" />
);
