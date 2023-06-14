import styled from "styled-components";
import colors from "../../../styles/colors";

const Style = styled.div`
  width: 80%;
  margin: 0 auto 10vh;
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
        .description {
          overflow: hidden;
          max-height: 9em;
          margin-bottom: 0.5em;
        }
        .tag-icon {
          .tag-name {
            margin: 2px;
          }
        }
      }
      /* height: 3em; */
    }
  }
  @media screen and (min-width: 480.5px) and (max-width: 768px) {
    height: auto;
  }
  @media screen and (max-width: 480px) {
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
