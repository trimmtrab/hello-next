import Link from 'next/link';
import styled from 'styled-components';

const Header= () => (
  <div>
    <Link href="/">
      <HeaderLink>Home</HeaderLink>
    </Link>
    <Link href="/about">
      <HeaderLink>About</HeaderLink>
    </Link>
  </div>
);

const HeaderLink = styled.a`
  cursor: pointer;
  margin-right: 15px;
`;

export default Header;
