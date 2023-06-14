import styled from "styled-components";
import colors from "../../../styles/colors";
const Style = styled.div`
  width: 100%;
  height: 100vh;
  padding: 5em 0;
  background-color: ${colors.main_bg_color};
  .content {
    width: 50%;
    padding-left: 10%;
    padding-top: 10%;
    margin: 0;
    color: ${colors.main_text_color};
    .title {
      color: ${colors.light_blue};
    }
    .introduce {
      color: ${colors.main_text_color};
      text-align: justify;
    }
    .container-icon {
      margin: 1em 0;

      .icon-social {
        color: ${colors.main_text_color};
        font-size: 30px;
        margin-right: 1em;
        /* width: 2em; */
      }
    }
  }
  .card-image {
    width: 50%;
    height: 300px;
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    border-radius: 10px;
    margin: 7% 0;
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
  @media screen and (min-width: 480.5px) and (max-width: 768px) {
    height: auto;
  }
`;
export default Style;
export const StyleMobile = styled.div`
  width: 100%;
  height: auto;
  padding: 5em 0;

  background-color: ${colors.main_bg_color};
  .content {
    color: ${colors.main_text_color};
    width: 100%;
    padding: 10%;
    margin-top: 150px;
    .title {
      color: ${colors.light_blue};
    }
    .introduce {
      color: ${colors.main_text_color};
      text-align: justify;
    }
    .container-icon {
      margin: 1em 0;

      .icon-social {
        color: ${colors.main_text_color};
        font-size: 30px;
        margin-right: 1em;
        /* width: 2em; */
      }
    }
  }
  .card-image {
    width: 50%;
    height: 300px;
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    border-radius: 10px;
    margin: 7% 0;
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
`;
