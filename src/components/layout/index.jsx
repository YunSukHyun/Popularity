import Header from "../header/header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header title={"인기투표"} />
      <Outlet />
    </>
  );
};

export default Layout;
