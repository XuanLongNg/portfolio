import styled from "styled-components";
import colors from "../../../styles/colors";

const Style = styled.div`
  height: 80vh;
  width: 80%;
  margin: auto;
  .container-title {
    .title-divider {
      font-size: 2em;
      color: ${colors.main_text_color};
      border-color: ${colors.main_text_color};
      margin-bottom: 100px;
    }
  }
  .container-content {
    .content {
      display: flex;
      flex-direction: column;
      justify-content: end;
      padding: 0 1em;
      .title {
        color: ${colors.light_blue};
      }
    }
    .card-image {
      width: 50%;
      height: 300px;
      display: flex;
      flex-direction: row-reverse;
      justify-content: center;
      border-radius: 10px;
      /* margin: 7% 0; */
      .ant-image {
        img {
          border-radius: 10px;
        }
        .ant-image-mask {
          border-radius: 10px;
        }
      }
      .custom-preview-mask {
        border-radius: 10px;
      }
    }
  }
`;
export default Style;
