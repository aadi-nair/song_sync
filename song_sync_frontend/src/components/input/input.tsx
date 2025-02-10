import "./input.css";
import * as React from "react";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
  label?: string | undefined;
  placeholder: string;
  inputClassName?: string;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className = "",
      label,
      placeholder = "",
      type = "text",
      inputClassName = "",
      ...props
    },
    ref
  ) => {
    return (
      <div className={`flex-column  ${className}`}>
        {label && <span className="label tc-accent fw-semibold">{label}</span>}
        <input
          type={type}
          className={`input fs-medium ${inputClassName}`}
          ref={ref}
          placeholder={placeholder}
          {...props}
        ></input>
      </div>
    );
  }
);

export { Input };
