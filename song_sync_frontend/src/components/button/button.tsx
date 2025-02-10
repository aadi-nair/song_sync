import "./button.css";
import React, { ReactNode } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { LucideIcon } from "lucide-react";
type VariantKeys = "default" | "logout" | "google";
export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  children: ReactNode;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", children, ...props }, ref) => {
    return (
      <button
        className={`bg-accent tc-white ${className} buttonWrapper fs-small fw-bold flex-row justify-center align-center`}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);
