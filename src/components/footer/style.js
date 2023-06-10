import styled from "styled-components";
import { Layout } from "antd";
import colors from "../../styles/colors";
const { Footer } = Layout;
const Style = styled(Footer)`
  height: 30vh;
  background-color: ${colors.main_bg_color};
  color: ${colors.main_text_color};
  border-top: 1px solid ${colors.main_text_color};
  h5 {
    color: ${colors.light_blue};
  }
`;
export default Style;
