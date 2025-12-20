import {IIconProps} from "@/base/interfaces/icon-props.interface";

export const processedIconProps = (props: IIconProps) => {
    const {className, width, height, fill, stroke, viewBox} = props;
    const widthValue = width || "24";
    const heightValue = height || "24";
    const fillValue = fill || "currentColor";
    const viewBoxValue = viewBox || "0 0 24 24";
    return {
        className,
        width: widthValue,
        height: heightValue,
        fill: fillValue,
        viewBox: viewBoxValue,
        stroke
    }
}