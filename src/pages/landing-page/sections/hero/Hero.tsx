import * as React from "react";

import styled from "styled-components";
import { theme } from "lib/style";

import { SectionContainer } from "lib/components";

const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 24px;

  min-height: 460px;
`;

const HeroMainText = styled.div`
  font-weight: bold;
  text-align:center;

  font-size: ${theme.fontSizes.l};

  ${theme.mediaBreakPointUp.md} {
    font-size: ${theme.fontSizes.xl};
  }

  ${theme.mediaBreakPointUp.lg} {
    font-size: ${theme.fontSizes.xxl};
  }
`;

const HeroSubText = styled(HeroMainText)`
font-weight:unset;
`

const HeroLogo = styled.img`
  padding: 32px 0;

  width: 50%;

  ${theme.mediaBreakPointUp.md} {
    width: 30%;
    padding: 36px 0;
  }

  ${theme.mediaBreakPointUp.lg} {
    width: 20%;
    padding: 42px 0;
  }
`;
export const Hero = () => {
  return (
    <SectionContainer>
      <HeroWrapper>
        <HeroMainText>CARDANO POOLS UNITED</HeroMainText>
        <HeroLogo src="https://pngimg.com/uploads/smiley/smiley_PNG36233.png" />
        <HeroSubText>
          BIG COLLABORATION OF SMALL STAKE POLS AND SKILLED STAKE POOL OPERATORS
        </HeroSubText>
      </HeroWrapper>
    </SectionContainer>
  );
};
