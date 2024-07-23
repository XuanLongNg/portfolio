import { styled } from "styled-components";

const MainLayoutStyle = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  background-color: var(--bg-primary);
  color: var(--text-primary);

  .decorator {
    position: fixed;
    z-index: 100;
    bottom: 20px;
  }
  .mail {
    position: fixed;
    z-index: 100;
    top: 12vh;
    right: 0;
  }
`;
export default MainLayoutStyle;
