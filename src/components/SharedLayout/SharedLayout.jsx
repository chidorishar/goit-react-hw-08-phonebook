// import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { UserMenu } from 'components/UserMenu/UserMenu';
import {
  Header,
  HeaderLink,
  LinksList,
  LinksListItem,
} from './SharedLayout.styled';
import { Container } from 'components/common/shared.styled';

const LINKS = [
  { name: 'Register', to: '/' },
  { name: 'Login', to: 'login' },
];

export default function SharedLayout() {
  return (
    <>
      <Header>
        <Container>
          <LinksList>
            {LINKS.map(({ to, name }) => (
              <LinksListItem key={name}>
                <HeaderLink to={to}>{name}</HeaderLink>
              </LinksListItem>
            ))}
          </LinksList>
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
