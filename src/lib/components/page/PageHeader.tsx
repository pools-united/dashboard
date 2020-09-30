import * as React from 'react';
import styled from 'styled-components/macro';
import { theme } from 'lib/style';

const Container = styled.header`
  background-color: ${theme.palette.neutralPrimary};
  display: flex;
  justify-content: space-between;
  padding: 8px;
  padding-left: 0;
  height: 40px;

  ${theme.mediaBreakPointUp.lg} {
    padding-left: 8px;
  }
`;

const MenuSection = styled.div`
  display: flex;
`;

// type Props = {
//   handleSideNav: () => void;
//   isSideNavOpen: boolean;
// };

const PageHeader = (/* { handleSideNav, isSideNavOpen }: Props*/) => {
  // let { state, dispatch } = React.useContext(ContextOne);
  // const { branches, carriers } = state;
  // const [cookies] = useCookies();
  // const { fullName } = cookies;

  return (
    <Container>
      <MenuSection>
        {/* <HamburgerMenu onClick={handleSideNav}>
          {isSideNavOpen ? <MdClose /> : <MdMenu />}
        </HamburgerMenu> */}
      </MenuSection>
      {/* <AccountSection>
        <Item>{fullName}</Item>
        <LogoutButton onClick={handleLogout}>Odjava</LogoutButton>
      </AccountSection> */}
    </Container>
  );
};

export { PageHeader };
