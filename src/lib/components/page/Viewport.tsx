import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styled from 'styled-components/macro';

const Container = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow-y: auto;
  /* enable smooth (inertial) scroll on mobile safari */
  -webkit-overflow-scrolling: touch;
  /* create stacking context */
  z-index: 0;
  /* the smallest screen we support */
  min-width: 320px;
`;

type ViewportProps = {
  children: React.ReactNode;
};

export const Viewport = ({ children, ...rest }: ViewportProps) => {
  return ReactDOM.createPortal(
    <Container {...rest}>{children}</Container>,
    document.body
  );
};
