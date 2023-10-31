import { Navigate, Outlet, useLocation } from "react-router-dom";

import SideMenu from "../components/UserDashboard/SideMenu";
import NavBar from "../layout/NavBar";
import Footer from "../layout/Footer";
import useLoggedIn from "../hooks/useLoggedIn";

const UserDashboard = () => {
  const location = useLocation();

  // checking user is login or not
  const isLoggedIn = useLoggedIn();

  return !isLoggedIn ? (
    <Navigate to="/login" replace={true} state={{ from: location }} />
  ) : (
    <div className="bg-[#EFF0F4]">
      <NavBar />
      <div
        className="container mx-auto flex "
        style={{ height: "calc(100vh - 72px)" }}
      >
        <div className=" w-1/6 m-5 h-full overflow-auto ">
          <SideMenu />
        </div>
        <div className=" w-5/6  h-full pt-2 overflow-auto">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserDashboard;
