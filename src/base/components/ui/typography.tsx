import * as React from "react"
import {Slot} from "@radix-ui/react-slot"
import {cva, type VariantProps} from "class-variance-authority"

import {cn} from "@/base/lib/utils"
import {S_TEXT, S_TEXT_H1, S_TEXT_H2, S_TEXT_H3, S_TEXT_H4, S_TEXT_H5} from "@/common/constants/css.constant";

const typographyVariants = cva(
    "",
    {
        variants: {
            variant: {
                h1: `text-[${S_TEXT_H1}] text-[color:var(--text-primary)]`,
                h2: `text-[${S_TEXT_H2}] text-[color:var(--text-primary)]`,
                h3: `text-[${S_TEXT_H3}] text-[color:var(--text-primary)]`,
                h4: `text-[${S_TEXT_H4}] text-[color:var(--text-primary)]`,
                h5: `text-[${S_TEXT_H5}] text-[color:var(--text-primary)]`,
                p: `text-[${S_TEXT}] text-[color:var(--text-primary)]`,
                blockquote: `text-[${S_TEXT}] text-[color:var(--text-primary)]`,
            }
        },
        defaultVariants: {
            variant: "p",
        },
    }
)

export enum TYPE_TYPOGRAPHY {
    H1 = "h1",
    H2 = "h2",
    H3 = "h3",
    H4 = "h4",
    H5 = "h5",
    P = "p",
    BLOCKQUOTE = "blockquote",
}

export interface TypographyProps extends React.ComponentProps<"p"> {
    asChild?: boolean,
}

function Typography({
                        className,
                        variant = TYPE_TYPOGRAPHY.P,
                        asChild = false,
                        ...props
                    }: TypographyProps &
    VariantProps<typeof typographyVariants>) {
    const Comp: any = asChild ? Slot : variant;

    return (
        <Comp
            data-slot={variant}
            data-variant={variant}
            className={cn(typographyVariants({variant, className}))}
            {...props}
        />
    )
}

export {Typography, typographyVariants}


