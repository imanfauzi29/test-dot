import { cn } from "@/utils/cn";
import Image from "next/image";

interface CardProps extends React.HTMLAttributes<HTMLElement> {}

const Card = ({ className, ...props }: CardProps) => {
  return (
    <section
      className={cn("rounded-lg border p-4 gap-6 flex flex-col", className)}
      {...props}
    />
  );
};

interface CardImageProps extends React.HTMLAttributes<HTMLImageElement> {
  src: string;
  width: number;
  height: number;
  alt: string;
  sizes?: string;
  className?: string;
}

export const CardImage = ({
  className,
  src,
  alt,
  ...props
}: CardImageProps) => {
  return (
    <Image
      src={src}
      className={cn("h-52 object-cover w-full rounded-lg", className)}
      alt={alt}
      {...props}
    />
  );
};

interface CardTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  text?: string | JSX.Element;
  description?: string | JSX.Element;
  custom?: boolean;
}

export const CardTitle = ({
  text,
  description,
  className,
  custom,
  ...props
}: CardTitleProps) => {
  return custom ? (
    props.children
  ) : (
    <div className={cn("flex flex-col gap-2", className)} {...props}>
      <h1 className="text-2xl font-bold">{text}</h1>
      <p>{description}</p>
    </div>
  );
};

interface CardContent extends React.HTMLAttributes<HTMLDivElement> {}

export const CardContent = ({ className, ...props }: CardContent) => {
  return <div className={cn(className)} {...props} />;
};

export default Card;
