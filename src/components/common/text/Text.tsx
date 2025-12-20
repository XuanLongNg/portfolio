// import { ConfigProvider, Typography } from "antd";
import {
  COLOR_MAIN_TEXT,
  COLOR_TEXT_SUCCESS_DARK,
  COLOR_TEXT_SUCCESS_LIGHT,
  COLOR_TEXT_WARNING_DARK,
  COLOR_TEXT_WARNING_LIGHT,
} from "@/common/constants/colors.constant";
import { useTheme } from "next-themes";
// import { TextStyle } from "@/components/common/text/text.style";
// import { TextProps } from "antd/es/typography/Text";

// const { Text: TextAnt } = Typography;
// export interface ITextProps extends TextProps {}

export default function Text({ children, ...rest }: any) {
  const { theme, setTheme } = useTheme();
  return (
    // <ConfigProvider
    //   theme={{
    //     token: {
    //       colorSuccess:
    //         theme === "dark"
    //           ? COLOR_TEXT_SUCCESS_DARK
    //           : COLOR_TEXT_SUCCESS_LIGHT,
    //       colorWarning:
    //         theme === "dark"
    //           ? COLOR_TEXT_WARNING_DARK
    //           : COLOR_TEXT_WARNING_LIGHT,
    //       colorPrimaryHover: COLOR_MAIN_TEXT,
    //     },
    //   }}
    // >
      <div {...rest}>{children}</div>
    // </ConfigProvider>
  );
}
