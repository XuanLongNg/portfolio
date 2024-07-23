import styled from "styled-components";

const ProjectStyle = styled.div`
  width: 80%;
  margin: 0 auto 10vh;
  height: auto;

  .slider {
    .box {
      padding: 0 2em;
      min-height: 50vh;

      .text-group {
        min-height: 40vh;

        .title-card {
          color: var(--text-primary);
        }
        .title-description {
          color: var(--text-primary);
        }
        .btn-redirect {
          width: 8em;
        }
        .tag-icon {
          width: 100%;
        }
      }
      .image-group {
        position: relative;
        width: 100%;
        .image-bg {
          position: absolute;
          z-index: 1;
          width: 100%;
          height: 40vh;
          max-width: 30vw;
          min-width: 280px;
        }
        .ant-image {
          position: absolute;
          z-index: 2;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          .image-project {
            height: 40vh;
            width: auto;
            max-width: 30vw;
            min-width: 280px;
          }
        }
      }
    }
  }
`;
export default ProjectStyle;
