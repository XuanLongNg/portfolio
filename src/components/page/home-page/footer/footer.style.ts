import styled from "styled-components";
import {Layout} from "antd";
import {COLOR_LIGHT_BLUE, COLOR_MAIN_BG, COLOR_MAIN_TEXT} from "@/common/constants/colors.constant";

const {Footer} = Layout;
const FooterStyle = styled(Footer)`
    height: 30vh;
    background-color: ${COLOR_MAIN_BG};
    color: ${COLOR_MAIN_TEXT};
    border-top: 1px solid ${COLOR_MAIN_TEXT};

    h5 {
        color: ${COLOR_LIGHT_BLUE};
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
        height: 20vh;
    }
    @media screen and (max-width: 767px) {
        height: 20vh;
        h5 {
            font-size: 18px;
        }
    }
`;
export default FooterStyle;
