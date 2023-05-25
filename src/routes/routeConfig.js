import { Navigate } from "react-router-dom";
import MainLayout from "../layouts/main/mainLayout";
import HomePage from "../pages/main";
import AppConfig from "./appConfig";

const RouteConfig = [
  {
    path: AppConfig.HOME_PAGE,
    element: <HomePage />,
    layout: MainLayout,
  },
  {
    path: "*",
    element: <Navigate to={AppConfig.NOT_FOUND} />,
  },
];
export default RouteConfig;
