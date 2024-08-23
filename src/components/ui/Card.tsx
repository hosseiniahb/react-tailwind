import { FC, ReactNode } from "react";
import { clsx as cn } from "clsx";

type T_CardProps = {
  children?: ReactNode;
  className?: string;
};

const Card: FC<T_CardProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        "rounded-xl border transition-all hover:shadow dark:border-slate-700",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Card;
