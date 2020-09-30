import * as React from 'react';

import styled from 'styled-components';
import { theme } from 'lib/style';
import { SectionContainer } from 'lib/components';

const StatsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 24px;

  min-height: 460px;

  background-color: ${theme.palette.black};
  color: ${theme.palette.white};
`;

const ContainerStats = styled.div`

`

export const Stats = () => {
  return (
    <SectionContainer>
      <StatsWrapper>
        <span>General ada stats (price, epoch itd itd..) mozda stats za glavni pool</span>
      </StatsWrapper>
    </SectionContainer>
  );
};
