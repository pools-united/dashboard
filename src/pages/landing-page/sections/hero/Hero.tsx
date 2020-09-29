import * as React from 'react';

import styled from 'styled-components';

import { SectionContainer } from 'lib/components';

const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 24px;

  min-height: 460px;
`;

export const Hero = () => {
  return (
    <SectionContainer>
      <HeroWrapper>
        <h2>POOLS UNITED</h2>
        <h3>BIG COLLABORATION OF SMALL STAKE POLS AND SKILLED STAKE POOL OPERATORS</h3>
      </HeroWrapper>
    </SectionContainer>
  );
};
