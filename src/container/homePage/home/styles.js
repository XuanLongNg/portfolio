import styled from "styled-components";

const Style = styled.div`
  /* margin-top: 5em; */
  width: 100%;
  height: 80vh;
  padding: 5em 0;
  /* height: 10000px; */
  /* background-color: gray; */
  .content {
    width: 50%;
    padding-left: 10%;
    padding-top: 10%;
    margin: 0;
    .container-icon {
      margin: 2em 0;
      .icon {
        color: black;
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
export default Style;
