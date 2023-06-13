import styled from "styled-components";
import colors from "../../../styles/colors";

const Style = styled.div`
  /* height: 80vh; */
  width: 80%;
  margin: auto;
  padding-bottom: 5em;
  .container-title {
    .title-divider {
      font-size: 2em;
      border-color: ${colors.main_text_color};
      color: ${colors.main_text_color};
      margin-bottom: 100px;
    }
  }
  .container {
    width: 100%;
    .animation {
      width: 60%;
    }
    .send-message {
      .icon-email {
        font-size: 2em;
      }
      .form-send-message {
        margin-top: 1em;
        .btn-send {
          background-color: ${colors.light_blue};
          color: ${colors.main_text_color};
          transition: background-color 0.4 ease;
        }
        .btn-send:hover {
          background-color: ${colors.main_text_color};
          color: ${colors.light_blue};
        }
      }
      display: block;
      width: 40%;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    /* .container {
      height: 60vh;
    } */
  }
  @media screen and (max-width: 767px) {
    height: auto;
    .container-title {
      .title-divider {
        margin-bottom: 10px;
      }
    }
    .container {
      width: 100%;
      .animation {
        height: 300px;
        width: 100%;
      }
      .send-message {
        .icon-email {
          font-size: 2em;
        }
        .form-send-message {
          margin-top: 1em;
          .btn-send {
            background-color: ${colors.light_blue};
            color: ${colors.main_text_color};
            transition: background-color 0.4 ease;
          }
          .btn-send:hover {
            background-color: ${colors.main_text_color};
            color: ${colors.light_blue};
          }
        }
        display: block;
        width: 100%;
      }
    }
  }
`;
export default Style;
