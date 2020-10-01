import * as React from 'react';

import { PageTemplate } from 'lib/components';
import { History } from 'history';
import { Hero, Stats } from './sections'
import AppContext from 'lib/Context/Context';


const Main = () => {
  return (
    <>
      <Hero />
      <Stats />
      <Hero />
      <Stats />
    </>
  );
};

export const LandingPage = ({
  history,
}: {
  history?: History;
}) => {
  return (
    <AppContext.Consumer>{(context:object) =>
    {
      console.log(context)
     return ( 
       <PageTemplate main={<Main/>} />)}}
    
    </AppContext.Consumer>
  );
};
