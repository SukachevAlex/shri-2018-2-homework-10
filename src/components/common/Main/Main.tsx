import { cn } from '@bem-react/classname';
import * as React from 'react';
import * as Data from '../EventItem/EventItems.json';
import { EventItem } from '../EventItem/index';
import { Title } from '../Title/Title';


import './Main.css';

const cnMain = cn('Main');
const cnEventList = cn('EventList');

export interface IMainProps {
  className?: string;
}

const events = Data.events.map((elem) => (
  <EventItem 
    key={elem.icon}
    critical={elem.type === 'critical'} 
    size={elem.size} 
    title={elem.title}
    icon={elem.icon}
    time={elem.time}
    source={elem.source}
    description={elem.description}
    data={elem.data}
    />
));

export const Main: React.SFC<IMainProps> = (props) => (
  <div className={cnMain({},[props.className])}>
    <Title text="Лента событий" className={cnMain('Title')}/>
    <div className={cnEventList()}>
      {events}
    </div>
  </div>
);
