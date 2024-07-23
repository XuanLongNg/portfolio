import DecoratorStyle from "@/components/layout/main-layout/decorator/decorator.style";
import Button from "@/components/common/button/Button";
import {
  FacebookOutlined,
  GithubOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  XOutlined,
} from "@ant-design/icons";
import { socialConstant } from "@/common/constants/social.constant";
import { ESocial } from "@/common/enums/social.enum";

export default function Decorator({ className }: { className: string }) {
  return (
    <DecoratorStyle align={"center"} gap={12} vertical className={className}>
      <Button
        href={socialConstant[ESocial.GITHUB]}
        shape={"circle"}
        className={"icon-btn"}
        type={"text"}
      >
        <GithubOutlined />
      </Button>
      <Button
        href={socialConstant[ESocial.FACEBOOK]}
        shape={"circle"}
        className={"icon-btn"}
        type={"text"}
      >
        <FacebookOutlined />
      </Button>
      <Button
        href={socialConstant[ESocial.LINKED_IN]}
        shape={"circle"}
        className={"icon-btn"}
        type={"text"}
      >
        <LinkedinOutlined />
      </Button>
      <Button
        href={socialConstant[ESocial.INSTAGRAM]}
        shape={"circle"}
        className={"icon-btn"}
        type={"text"}
      >
        <InstagramOutlined />
      </Button>
      <Button
        href={socialConstant[ESocial.TWITTER]}
        shape={"circle"}
        className={"icon-btn"}
        type={"text"}
      >
        <XOutlined />
      </Button>
      <div className={"line"}></div>
    </DecoratorStyle>
  );
}
