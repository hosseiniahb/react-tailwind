import { clsx as cn } from "clsx";
import { T_Button } from "../../types";
import { FC } from "react";

type T_ButtonProps = T_Button;

const Button: FC<T_ButtonProps> = ({
  type = "button",
  children,
  onClick,
  variant = "primary",
  className,
  disabled,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "rounded-xl p-3 text-lg font-semibold disabled:opacity-60",
        className,
        {
          "bg-primary text-white": variant === "primary",
          "bg-secondary text-white": variant === "secondary",
          "border bg-transparent text-slate-800 dark:border-slate-700":
            variant === "transparent",
          "border border-slate-700 bg-slate-800 text-slate-200":
            variant === "dark",
        },
      )}
    >
      {children}
    </button>
  );
};

export default Button;
