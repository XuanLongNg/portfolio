import styled from "styled-components";
import { Layout } from "antd";
import colors from "../../styles/colors";
const { Header } = Layout;
const Style = styled(Header)`
  height: 0;
  /* background-color: gray; */
  .header {
    border-radius: 10px;
    width: 50%;
    height: 3em;
    .list-header {
      background-color: white;
      list-style-type: none;
      border-radius: 30px;
      box-shadow: 0px 0px 7px;
      padding: 0;
      margin: 2em;
      height: 3em;
      li {
        height: 3em;
        line-height: 3em;
        text-decoration: none;
      }
      .active {
        color: ${colors.light_blue};
        /* font-size: 20px; */
        font-weight: bold;
        text-decoration: none;
      }
    }
    /* .list-header a:first-child li {
      color: orange;
    } */
  }
`;
export default Style;
