import { FramingInnerCommon } from 'components/common/shared.styled';
import { HeaderLink, LinksListItem } from './Navigation.styled';

const LINK_TYPES = {
  protected: 'PROT',
  private: 'PRIVATE',
};

const LINKS = [
  { name: 'Register', to: '/', type: LINK_TYPES.protected },
  { name: 'Login', to: 'login', type: LINK_TYPES.protected },
  { name: 'Contacts', to: 'contacts', type: LINK_TYPES.private },
];

export function Navigation() {
  return (
    <nav>
      <FramingInnerCommon as="ul">
        {LINKS.map(({ to, name }) => (
          <LinksListItem key={name}>
            <HeaderLink to={to}>{name}</HeaderLink>
          </LinksListItem>
        ))}
      </FramingInnerCommon>
    </nav>
  );
}
