import styled from 'styled-components';

import Header from './Header';

const Layout = props => (
  <LayoutContainer>
    <Header />
    {props.children}
  </LayoutContainer>
);

const LayoutContainer = styled.div`
  border: 1px solid #DDD;
  margin: 20px;
  padding: 20px;
`;

export default Layout;
