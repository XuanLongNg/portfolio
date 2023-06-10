import styled from "styled-components";
import colors from "../../../styles/colors";

const Style = styled.div`
  height: 80vh;
  width: 80%;
  margin: auto;
  .title-divider {
    font-size: 2em;
    border-color: ${colors.main_text_color};
    color: ${colors.main_text_color};

    margin-bottom: 100px;
  }
  .list-card {
    .item {
      .card {
        text-decoration: none;
        .ant-card {
          height: 20em;
        }
      }
      /* height: 3em; */
    }
  }
`;
export default Style;
