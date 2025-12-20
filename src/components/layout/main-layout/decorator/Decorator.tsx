// import DecoratorStyle from "@/components/layout/main-layout/decorator/decorator.style";
// import {
//   FacebookOutlined,
//   GithubOutlined,
//   InstagramOutlined,
//   LinkedinOutlined,
//   XOutlined,
// } from "@ant-design/icons";
import {Button} from "@/base/components/ui/button";
import GithubIcon from "@/components/common/icon/github";
import FacebookIcon from "@/components/common/icon/facebook";
import LinkedinIcon from "@/components/common/icon/linkedin";
import InstagramIcon from "@/components/common/icon/instagram";
import XIcon from "@/components/common/icon/x";
import {clsx} from "clsx";

export default function Decorator({className}: { className: string }) {
    const classNames = clsx("flex items-center flex-col m-[3vw]", className)
    return (
        <div className={classNames}>
            <Button
                variant={"ghost"}
                // href={socialConstant[ESocial.GITHUB]}
                className={"text-white rounded-[50%]"}
            >
                <GithubIcon/>
            </Button>
            <Button
                variant={"ghost"}
                // href={socialConstant[ESocial.FACEBOOK]}
                className={"text-white rounded-[50%]"}
            >
                <FacebookIcon/>
            </Button>
            <Button
                variant={"ghost"}
                // href={socialConstant[ESocial.LINKED_IN]}
                className={"text-white rounded-[50%]"}
            >
                <LinkedinIcon/>
            </Button>
            <Button
                variant={"ghost"}
                // href={socialConstant[ESocial.INSTAGRAM]}
                className={"text-white rounded-[50%]"}
            >
                <InstagramIcon/>
            </Button>
            <Button
                variant={"ghost"}
                // href={socialConstant[ESocial.TWITTER]}
                className={"text-white rounded-[50%]"}
            >
                <XIcon/>
            </Button>
            <div className={"h-[35vh] border-[2px] border-[color:var(--text-primary)] rounded-[10px]"}></div>
        </div>
    );
}
