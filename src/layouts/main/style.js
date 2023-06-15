import { styled } from "styled-components";
import colors from "../../styles/colors";

const Style = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  background-color: ${colors.main_bg_color};
  color: ${colors.main_text_color};
  .header {
    position: fixed;
    z-index: 100;
  }
`;
export default Style;
