// import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';

import { Container } from 'components/common/shared.styled';
import { Header } from './SharedLayout.styled';

export default function SharedLayout() {
  return (
    <>
      <Header>
        <Container>
          <Navigation />
          <UserMenu />
        </Container>
      </Header>

      {/* <Suspense fallback={<div>Loading...</div>}> */}
      <Container>
        <Outlet />
      </Container>
      {/* </Suspense> */}
    </>
  );
}
