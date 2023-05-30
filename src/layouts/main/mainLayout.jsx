import { Divider } from "antd";
import Body from "../../components/body/body";
import Header from "../../components/header/header";
import Style from "./style";
import Footer from "../../components/footer/footer";

const MainLayout = () => {
  return (
    <Style>
      <Header className="header" />
      <Body />
      <Footer />
    </Style>
  );
};
export default MainLayout;
