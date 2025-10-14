import { Outlet } from "react-router-dom";
import MainContainer from "./MainContainer";
import SideBar from "./SideBar";

const Body = () => {
  return (
    <div className="flex">
      <SideBar />
      <Outlet />
      {/* <MainContainer /> */} {/* Replaced with Outlet for routing */}
    </div>
  );
};

export default Body;
