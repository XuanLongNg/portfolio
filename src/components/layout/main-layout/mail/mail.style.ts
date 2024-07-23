import { styled } from "styled-components";
import { Flex } from "antd";

const MailStyle = styled(Flex)`
  color: var(--text-primary);
  margin-right: 4vw;
  .line {
    content: "";
    height: 35vh;
    border: 2px solid var(--text-primary);
    border-radius: 10px;
    width: 0;
    margin-bottom: 96px;
  }
  .text-mail {
    transform: rotate(90deg);
    color: var(--text-primary);
    position: absolute;
    width: 300px;
    top: 58vh;
  }
`;
export default MailStyle;
