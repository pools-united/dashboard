import * as React from 'react';
import styled from 'styled-components/macro';
import { theme } from 'lib/style';

import { Viewport } from 'lib/components';
import { PageHeader } from './PageHeader';

const Page = styled.div`
  height: 100%;
  width: 100%;
`;

const Content = styled.div`
  display: flex;
  /*does  work*/
  align-items: center;
  flex-direction: column;

  background-color: ${theme.palette.white};
`;

type Props = {
  children?: never;
  main: React.ReactNode;
};

export const PageTemplate = ({ main }: Props) => {

  return (
    <Viewport>
      <Page>
        <PageHeader />
        <Content>{main}</Content>
      </Page>
    </Viewport>
  );
};
