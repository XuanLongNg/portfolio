import { Divider } from "antd";
import Body from "../../components/body/body";
import Header from "../../components/header/header";
import Style from "./style";

const MainLayout = () => {
  return (
    <Style>
      <Header className="header" />
      <Body />
      Hello
    </Style>
  );
};
export default MainLayout;
