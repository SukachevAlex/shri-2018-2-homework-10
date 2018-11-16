import { classnames, cn  } from '@bem-react/classname';
import * as React from 'react';
import { AlbumCover } from './AlbumCover/Player-AlbumCover';
import { PlayerControll } from './Controll/index';
import { PlayerRange } from './Range/index';
import { PlayerTrack } from './Track/Player-Track';

import './Player.css';

const cnPlayer = cn('Player');

export interface IPlayerProps {
  artistName?: string;
  className?: string;
  trackName?: string;
  length?: string;
  volume?: number;
}

export const Player: React.SFC<IPlayerProps> = ({artistName, trackName, length, volume}) => (
  <div className={classnames('Player', 'EventItem-Player')}>
    <div className={cnPlayer('TopLine')}>
      <AlbumCover />
      <div className={cnPlayer('Info')}>
        <PlayerTrack artistName={artistName} trackName={trackName}/>
        <div className={cnPlayer('RangeArea')}>
          <PlayerRange className={'123'} time={true} min={0} value="10" step={1} />
          <div className={cnPlayer('Time')}>{length}</div>
        </div>
      </div>
    </div>

    <div className={cnPlayer('BottomLine')}>
      <PlayerControll prev={true} />
      <PlayerControll next={true} />
      <PlayerRange volume={true} min={0} max={100} value="80" step={1} />
      <div className={cnPlayer('Volume')}>{volume}%</div>
    
    </div>
  </div>            
);
