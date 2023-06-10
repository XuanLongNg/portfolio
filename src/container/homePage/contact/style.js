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
`;
export default Style;
