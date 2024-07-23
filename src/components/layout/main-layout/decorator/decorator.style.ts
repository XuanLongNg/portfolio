import { styled } from "styled-components";
import { Flex } from "antd";

const DecoratorStyle = styled(Flex)`
  margin-left: 3vw;
  color: var(--text-primary);
  .line {
    content: "";
    height: 35vh;
    border: 2px solid var(--text-primary);
    border-radius: 10px;
    width: 0;
  }
  .icon-btn {
    font-size: 24px;
  }
`;
export default DecoratorStyle;
