import React from "react";
import PropTypes from "prop-types";

const shapes = { CircleBorder37: "rounded-[37px]" };
const variants = { FillGray100: "bg-gray_100 text-gray_900" };
const sizes = { sm: "p-[13px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["CircleBorder37"]),
  variant: PropTypes.oneOf(["FillGray100"]),
  size: PropTypes.oneOf(["sm"]),
};

Button.defaultProps = { className: "", shape: "", variant: "", size: "" };
export { Button };
