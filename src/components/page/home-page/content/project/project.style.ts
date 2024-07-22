import styled from "styled-components";
import {COLOR_MAIN_BG, COLOR_MAIN_TEXT} from "@/common/constants/colors.constant";

const ProjectStyle = styled.div`
    width: 80%;
    margin: 0 auto 10vh;
    height: auto;

    .title-divider {
        font-size: 2em;
        border-color: ${COLOR_MAIN_TEXT};
        color: ${COLOR_MAIN_TEXT};

        margin-bottom: 100px;
    }

    .list-card {
        .item {
            .card {
                text-decoration: none;

                .ant-card-head-title {
                    color: ${COLOR_MAIN_BG};
                }

                .ant-card {
                    height: 20em;
                }

                .description {
                    overflow: hidden;
                    max-height: 9em;
                    margin-bottom: 0.5em;
                }

                .tag-icon {
                    .tag-name {
                        margin: 2px;
                    }
                }
            }
        }
    }
`;
export default ProjectStyle;
