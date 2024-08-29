import styled from "styled-components";
import { Layout } from "antd";
import { responsiveConstant } from "@/common/constants/responsive.constant";

const { Header } = Layout;
const HeaderStyle = styled(Header)`
  height: 10vh;
  width: 100%;
  position: fixed;
  z-index: 10000;
  background-color: var(--bg-primary);
  transition: background-color 0.5s ease;
  &.on-scroll {
    background-color: var(--bg-secondary) !important;
    box-shadow: 0px 0px 7px;
  }
  .group-action {
    width: 100%;
    .list-header {
      color: var(--text-primary);
      list-style-type: none;
      gap: 2em;
      padding: 0;
      margin: 0;
      button {
        font-size: 16px;
      }
      .active button {
        color: var(--text-highlight) !important;
      }
    }
    .btn-theme {
      color: var(--text-primary);
      font-size: 24px;
    }
  }

  @media screen and (min-width: ${responsiveConstant.tablet
      .min}px) and (max-width: ${responsiveConstant.tablet.max}px) {
    .header {
      width: 80%;
      height: 4em;
    }
  }
  // @media screen and (max-width: 767px) {
  //     .header {
  //         width: 100%;
  //         height: 4em;
  //     }
  // }
`;
export default HeaderStyle;
