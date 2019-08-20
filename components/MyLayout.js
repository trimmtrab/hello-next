import Header from './Header';

const layoutStyle = {
  border: '1px solid #DDD',
  margin: 20,
  padding: 20,
};

const Layout = props => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
  </div>
);

export default Layout;
