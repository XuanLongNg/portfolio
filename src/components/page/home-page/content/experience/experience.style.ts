import styled from "styled-components";

const ExperienceStyle = styled.div`
  width: 80vw;
  margin: auto;
  overflow: hidden;
  .container-content {
    position: relative;
    height: 84vh;
    width: 80vw;
    .animation {
      width: 50%;
    }
    .timeline {
      position: absolute;
      padding-top: 12px;
      max-height: 84vh;
      width: 100%;
      overflow-x: hidden;
      overflow-y: scroll;
      right: 0;
      ul {
        width: 90%;
      }
      &::-webkit-scrollbar {
        display: none;
      }

      ::-webkit-scrollbar-thumb {
        display: none;
      }

      ::-webkit-scrollbar-track {
        display: none;
      }
    }
  }
`;

export default ExperienceStyle;
