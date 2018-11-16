import { cn } from '@bem-react/classname';
import * as React from 'react';

import './Player-Track.css';

const cnPlayer = cn('Player');

export interface IPlayerTrackProps {
  artistName?: string;
  className?: string;
  trackName?: string;
}

export const PlayerTrack: React.SFC<IPlayerTrackProps> = ({artistName, trackName}) => (
  <a className={cnPlayer('Track')} href="#" tabIndex={-1}>
    <span className={cnPlayer('ArtistName')}>{artistName}</span>
    &#32;-&#32; 
    <span className={cnPlayer('TrackName')}>{trackName}</span>
  </a>
);
