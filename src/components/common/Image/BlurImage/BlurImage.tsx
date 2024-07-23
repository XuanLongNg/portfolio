import BlurImageStyle from "@/components/common/Image/BlurImage/blur-image.style";

export default function BlurImage({
  url,
  className,
}: {
  url: string;
  className?: string;
}) {
  return (
    <BlurImageStyle
      style={{
        backgroundImage: `url(${url})`,
      }}
      className={className}
    ></BlurImageStyle>
  );
}
