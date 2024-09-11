import { ConfigProvider, Timeline as TimelineAnt } from "antd";
import { ComponentProps } from "react";
import {
  COLOR_MAIN_TEXT,
  COLOR_TEXT_HIGH_LIGHT_DARK,
  COLOR_TEXT_HIGH_LIGHT_LIGHT,
} from "@/common/constants/colors.constant";
import { useTheme } from "next-themes";
import { TimelineStyle } from "@/components/common/timeline/timeline.style";

export interface ITimelineProps extends ComponentProps<typeof TimelineAnt> {}

export default function Timeline({ children, ...rest }: ITimelineProps) {
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
          tailColor: COLOR_MAIN_TEXT,
        },
      }}
    >
      <TimelineStyle {...rest}>{children}</TimelineStyle>
    </ConfigProvider>
  );
}
