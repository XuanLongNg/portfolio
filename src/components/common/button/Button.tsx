import { ButtonStyle } from "@/components/common/button/button.style";
import { Button as ButtonAnt, ConfigProvider } from "antd";
import { ComponentProps } from "react";
import {
  COLOR_MAIN_TEXT,
  COLOR_TEXT_HIGH_LIGHT_DARK,
  COLOR_TEXT_HIGH_LIGHT_LIGHT,
} from "@/common/constants/colors.constant";
import { useTheme } from "next-themes";

export interface IButtonProps extends ComponentProps<typeof ButtonAnt> {}

export default function Button({ children, ...rest }: IButtonProps) {
  const { theme, setTheme } = useTheme();
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary:
            theme === "dark"
              ? COLOR_TEXT_HIGH_LIGHT_DARK
              : COLOR_TEXT_HIGH_LIGHT_LIGHT,
          colorPrimaryHover: COLOR_MAIN_TEXT,
        },
      }}
    >
      <ButtonStyle {...rest}>{children}</ButtonStyle>
    </ConfigProvider>
  );
}
