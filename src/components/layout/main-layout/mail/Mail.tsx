import {TYPE_TYPOGRAPHY, Typography} from "@/base/components/ui/typography";
import {clsx} from "clsx";

export default function Mail({className}: { className: string }) {
    const classNames = clsx(className, "")
    return (
        <div className={"flex items-center gap-3 flex-col"}>
            <div className={"h-[35vh] border-[2px] border-[color:var(--text-primary)] rounded-[10px]"}></div>
            <Typography variant={TYPE_TYPOGRAPHY.P}
                        className={"transform-[rotate(90deg)] text-center absolute w-[300px] top-[58vh]"}>
                ngxuanlong2002@gmail.com
            </Typography>
        </div>
    );
}
