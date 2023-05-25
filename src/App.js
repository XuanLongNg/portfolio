import logo from "./logo.svg";
import "./App.css";
import RouteConfig from "./routes/routeConfig";
import { useRoutes } from "react-router-dom";

function App() {
  const convertRoutes = RouteConfig.map((route) => {
    const { layout, element: elementRoute } = route;

    let element = elementRoute;
    if (layout) {
      const Layout = layout;
      element = <Layout>{element}</Layout>;
    }

    return {
      ...route,
      element,
    };
  });
  const element = useRoutes(convertRoutes);
  return <div className="App">{element}</div>;
}

export default App;
