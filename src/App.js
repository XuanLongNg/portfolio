import logo from "./logo.svg";
import "./App.css";
import RouteConfig from "./routes/routeConfig";
import { useRoutes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  AOS.init();
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
  return <div className="App scroll-bar">{element}</div>;
}

export default App;
