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
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    height: auto;
  }
  @media screen and (max-width: 767px) {
    height: auto;
    .container-content {
      display: block;
      .card-image {
        width: 100%;
      }
      .content {
        width: 100%;
        margin-top: 1em;
      }
    }
  }
`;
export default Style;
