import styled from "styled-components";
import colors from "../../../styles/colors";

const Style = styled.div`
  width: 80%;
  margin: 0 auto 10vh;
  height: auto;

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
        .ant-card-head-title {
          color: ${colors.main_bg_color};
        }
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
    }
  }
`;
export default Style;
