import { cn } from '@bem-react/classname';
import { RegistryConsumer } from '@bem-react/di';
import * as React from 'react';
import { Footer } from '../Footer/Footer';
import { IHeaderProps } from '../Header/Header';
import { Main } from '../Main/Main';

import './Page.css';

const cnApp = cn('App');
const cnHeader = cn('Header');
const cnPage = cn('Page');

export interface IPageProps {
  className?: string;
}

export const Page = () => (
  <RegistryConsumer>
    {registries => {
      const registry = registries[cnApp()];
      const Header = registry.get<IHeaderProps>(cnHeader());

      return (
        <div className={cnPage()}>
          <Header className={cnPage('Header')}/>
          <Main className={cnPage('Main')} />
          <Footer className={cnPage('Footer')} />
        </div>
        );
    }}
  </RegistryConsumer>
);
