import { memo } from "react";
import SideBar from "./components/SideBar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex h-screen">
      <SideBar />
      <main className="flex-1 pl-15 pt-6 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default memo(DashboardLayout);
