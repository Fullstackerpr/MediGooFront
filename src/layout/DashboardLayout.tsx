import { memo } from "react";
import SideBar from "./components/SideBar";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";

const DashboardLayout = () => {
  return (
    <div>
      <Header/>
      <div className="flex h-screen">
        <SideBar />
        <main className="flex-1 pl-15 pt-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default memo(DashboardLayout);
