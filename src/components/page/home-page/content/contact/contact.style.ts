import styled from "styled-components";
import {COLOR_LIGHT_BLUE, COLOR_MAIN_TEXT} from "@/common/constants/colors.constant";

const ContactStyle = styled.div`
    /* height: 80vh; */
    width: 80%;
    margin: auto;
    padding-bottom: 5em;

    .container-title {
        .title-divider {
            font-size: 2em;
            border-color: ${COLOR_MAIN_TEXT};
            color: ${COLOR_MAIN_TEXT};
            margin-bottom: 100px;
        }
    }

    .container {
        width: 100%;

        .animation {
            width: 60%;
        }

        .send-message {
            .description {
                text-align: justify;
            }

            .icon-email {
                font-size: 2em;
            }

            .form-send-message {
                margin-top: 1em;

                .btn-send {
                    background-color: ${COLOR_LIGHT_BLUE};
                    color: ${COLOR_MAIN_TEXT};
                    transition: all 0.4 ease;
                }

                .btn-send:hover {
                    background-color: ${COLOR_MAIN_TEXT};
                    color: ${COLOR_LIGHT_BLUE};
                }
            }

            display: block;
            width: 40%;
        }
    }
`;
export default ContactStyle;

export const ContactStyleMobile = styled.div`
    height: auto;
    width: 80%;
    margin: auto;
    padding-bottom: 5em;

    .container-title {
        .title-divider {
            font-size: 2em;
            border-color: ${COLOR_MAIN_TEXT};
            color: ${COLOR_MAIN_TEXT};
            margin-bottom: 10px;
        }
    }

    .container {
        width: 100%;

        .animation {
            height: 300px;
            width: 100%;
        }

        .send-message {
            .description {
                text-align: justify;
            }

            .icon-email {
                font-size: 2em;
            }

            .form-send-message {
                margin-top: 1em;

                .btn-send {
                    background-color: ${COLOR_LIGHT_BLUE};
                    color: ${COLOR_MAIN_TEXT};
                    transition: all 0.4 ease;
                }

                .btn-send:hover {
                    background-color: ${COLOR_MAIN_TEXT};
                    color: ${COLOR_LIGHT_BLUE};
                }
            }

            display: block;
            width: 100%;
        }
    }
`;
