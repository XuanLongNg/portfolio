import { Divider } from "antd";
import { ComponentProps } from "react";
import { DividerStyle } from "@/components/common/title-divider/divider.style";

export interface IDividerProps extends ComponentProps<typeof Divider> {}

export default function TitleDivider({ children, ...rest }: IDividerProps) {
  return <DividerStyle {...rest}>{children}</DividerStyle>;
}
