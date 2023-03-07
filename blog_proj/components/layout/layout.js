import MainNav from "./MainNav/MainNav";

const Layout = (props) => {
  return (
    <>
      <MainNav />
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
