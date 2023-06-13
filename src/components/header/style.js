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

        font-weight: bold;
        text-decoration: none;
      }
    }
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    .header {
      width: 80%;
      height: 4em;
    }
  }
  @media screen and (max-width: 767px) {
    .header {
      width: 100%;
      height: 4em;
    }
  }
`;
export default Style;
