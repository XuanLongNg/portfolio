import {IIconProps} from "@/base/interfaces/icon-props.interface";
import {processedIconProps} from "@/base/utils/processed-icon-prop.util";

export default function MoonIcon(props: IIconProps) {
    const {className, width, height, fill, stroke, viewBox} = processedIconProps(props);
    return <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={viewBox}
        width={width}
        height={height}
        fill={fill}
        className={className}
        stroke={stroke}
    >
        <path d="M12 2A9.91 9.91 0 0 0 9 2.46A10 10 0 0 1 9 21.54A10 10 0 1 0 12 2Z"/>
    </svg>
}