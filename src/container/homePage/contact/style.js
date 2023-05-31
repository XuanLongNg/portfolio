import styled from "styled-components";

const Style = styled.div`
  /* height: 80vh; */
  width: 80%;
  margin: auto;
  padding-bottom: 5em;
  .container-title {
    .title-divider {
      font-size: 2em;
      border-color: black;
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
      }
      display: block;
      width: 40%;
    }
  }
`;
export default Style;
