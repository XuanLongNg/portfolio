import styled from "styled-components";
// import { Layout } from "antd";
// const { Header } = Layout;
const Style = styled.div`
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
      }
    }
    .list-header a:first-child li {
      color: orange;
    }
  }
`;
export default Style;
