import { lazy, memo } from "react";
import { useRoutes } from "react-router-dom";

const DashboardLayout = lazy(() => import("../layout/DashboardLayout"));
const Dashboard = lazy(() => import("../pages/dashboard"));
const Doctor = lazy(() => import("../pages/doctor"));
const Potition = lazy(() => import("../pages/potition"));
const Patient = lazy(() => import("../pages/patient"));
const Admin = lazy(() => import("../pages/admin"));
const Sett = lazy(() => import("../pages/setting"));
const Exit = lazy(() => import("../pages/exit"));

const AppRouter = () => {
  return useRoutes([
    {
      path: "/",
      element: <DashboardLayout />,
      children: [
        { index: true, element: <Dashboard /> },
        { path: "doctor", element: <Doctor /> },
        { path: "potition", element: <Potition /> },
        { path: "patient", element: <Patient /> },
        { path: "admin", element: <Admin /> },
        { path: "setting", element: <Sett /> },
        { path: "exit", element: <Exit /> },
      ],
    },
  ]);
};

export default memo(AppRouter);
