import Link from 'next/link';
import styled from 'styled-components';

const linkStyle = {
  marginRight: 15,
};

const Header= () => (
  <div>
    <Link href="/">
      <HeaderLink style={linkStyle}>Home</HeaderLink>
    </Link>
    <Link href="/about">
      <HeaderLink style={linkStyle}>About</HeaderLink>
    </Link>
  </div>
);

const HeaderLink = styled.a`
  margin-right: 15px;
`;

export default Header;
