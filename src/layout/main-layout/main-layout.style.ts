import {styled} from "styled-components";
import {COLOR_MAIN_BG, COLOR_MAIN_TEXT} from "@/common/constants/colors.constant";

const MainLayoutStyle = styled.div`
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    background-color: ${COLOR_MAIN_BG};
    color: ${COLOR_MAIN_TEXT};

    .header {
        position: fixed;
        z-index: 100;
    }
`;
export default MainLayoutStyle;
