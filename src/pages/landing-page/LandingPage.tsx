import * as React from 'react';

import { PageTemplate } from 'lib/components';
import { History } from 'history';

import { Hero, Stats } from './sections'

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
    <>
      <PageTemplate main={<Main/>} />
    </>
  );
};
