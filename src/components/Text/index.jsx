import React from "react";

const variantClasses = {
  h1: "font-extrabold sm:text-5xl md:text-5xl text-[70px]",
  h2: "font-extrabold sm:text-[41px] md:text-[47px] text-[55px]",
  h3: "font-extrabold sm:text-[40px] md:text-[46px] text-[50px]",
  h4: "font-medium sm:text-4xl md:text-[38px] text-[40px]",
  h5: "font-extrabold sm:text-[31px] md:text-[33px] text-[35px]",
  h6: "font-medium sm:text-[29px] md:text-[31px] text-[33px]",
  body1: "font-extrabold text-3xl sm:text-[26px] md:text-[28px]",
  body2: "font-extrabold sm:text-[21px] md:text-[23px] text-[25px]",
  body3: "font-medium text-xl",
};

const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
