import Header from "../header/header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Header title={"인기투표"} />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
