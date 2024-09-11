import { ConfigProvider, Typography } from "antd";
import { ComponentProps } from "react";
import {
  COLOR_MAIN_TEXT,
  COLOR_TEXT_SUCCESS_DARK,
  COLOR_TEXT_SUCCESS_LIGHT,
  COLOR_TEXT_WARNING_DARK,
  COLOR_TEXT_WARNING_LIGHT,
} from "@/common/constants/colors.constant";
import { useTheme } from "next-themes";
import { TextStyle } from "@/components/common/text/text.style";

const { Text: TextAnt } = Typography;
export interface ITextProps extends ComponentProps<typeof TextAnt> {}

export default function Text({ children, ...rest }: ITextProps) {
  const { theme, setTheme } = useTheme();
  return (
    <ConfigProvider
      theme={{
        token: {
          colorSuccess:
            theme === "dark"
              ? COLOR_TEXT_SUCCESS_DARK
              : COLOR_TEXT_SUCCESS_LIGHT,
          colorWarning:
            theme === "dark"
              ? COLOR_TEXT_WARNING_DARK
              : COLOR_TEXT_WARNING_LIGHT,
          colorPrimaryHover: COLOR_MAIN_TEXT,
        },
      }}
    >
      <TextStyle {...rest}>{children}</TextStyle>
    </ConfigProvider>
  );
}
