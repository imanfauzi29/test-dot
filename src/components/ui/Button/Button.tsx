import { cn } from "@/utils/cn";
import style from "./button.module.css";

export type Variant = "primary" | "secondary" | "ghost";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  text?: string;
}

const Button = ({ variant = "primary", text, className }: ButtonProps) => {
  return (
    <button
      className={cn(
        "px-4 py-2 rounded-md font-semibold",
        style[variant],
        className
      )}
    >
      {text}
    </button>
  );
};

export default Button;
