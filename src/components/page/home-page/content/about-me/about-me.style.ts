import styled from "styled-components";
import {COLOR_LIGHT_BLUE, COLOR_MAIN_TEXT} from "@/common/constants/colors.constant";

const AboutMeStyle = styled.div`
    height: 80vh;
    width: 80%;
    margin: auto;

    .container-title {
        .title-divider {
            font-size: 2em;
            color: ${COLOR_MAIN_TEXT};
            border-color: ${COLOR_MAIN_TEXT};
            margin-bottom: 100px;
        }
    }

    .container-content {
        padding: 3em 0;

        .content {
            width: 60%;
            display: flex;
            flex-direction: column;
            justify-content: end;
            padding: 0 1em;
            text-align: justify;

            .title {
                color: ${COLOR_LIGHT_BLUE};
            }
        }

        .card-image {
            width: 40%;
            height: 300px;
            display: flex;
            flex-direction: row-reverse;
            justify-content: center;
            border-radius: 10px;
            /* margin: 7% 0; */

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
    }

    @media screen and (min-width: 480.5px) and (max-width: 768px) {
        height: auto;
        .container-title {
            .title-divider {
                margin-bottom: 50px;
            }
        }
    }
`;
export default AboutMeStyle;

export const AboutMeStyleMobile = styled.div`
    height: auto;
    margin: auto;
    width: 80%;

    .container-title {
        .title-divider {
            font-size: 2em;
            color: ${COLOR_MAIN_TEXT};
            border-color: ${COLOR_MAIN_TEXT};
            margin-bottom: 50px;
        }
    }

    .container-content {
        padding: 0 0 3em;

        .content {
            width: 100%;
            padding: 0 1em;
            margin-top: 1em;
            text-align: justify;

            .title {
                color: ${COLOR_LIGHT_BLUE};
            }
        }

        .card-image {
            width: 100%;
            height: 300px;
            display: flex;
            flex-direction: row-reverse;
            justify-content: center;
            border-radius: 10px;
            /* margin: 7% 0; */

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
    }
`;
