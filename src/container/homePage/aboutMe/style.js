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
    padding: 3em 0;
    .content {
      width: 60%;
      display: flex;
      flex-direction: column;
      justify-content: end;
      padding: 0 1em;
      text-align: justify;

      .title {
        color: ${colors.light_blue};
      }
    }
    .card-image {
      width: 40%;
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
  @media screen and (min-width: 480.5px) and (max-width: 768px) {
    height: auto;
    .container-title {
      .title-divider {
        margin-bottom: 50px;
      }
    }
  }
`;
export default Style;

export const StyleMobile = styled.div`
  height: auto;
  margin: auto;
  width: 80%;
  .container-title {
    .title-divider {
      font-size: 2em;
      color: ${colors.main_text_color};
      border-color: ${colors.main_text_color};
      margin-bottom: 50px;
    }
  }
  .container-content {
    padding: 0 0 3em;
    .content {
      width: 100%;
      padding: 0 1em;
      margin-top: 1em;
      text-align: justify;

      .title {
        color: ${colors.light_blue};
      }
    }
    .card-image {
      width: 100%;
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
