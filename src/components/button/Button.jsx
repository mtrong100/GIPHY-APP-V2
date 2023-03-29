import React from "react";

const Button = ({
  children,
  onClick,
  className = "",
  bgColor = "primary",
  ...props
}) => {
  /* create switch case to change background button easier */
  let bgClassname = "bg-primary";
  switch (bgColor) {
    case "primary":
      bgClassname = "bg-gradientColor_7";
      break;
    case "secondary":
      bgClassname = "bg-gradientColor_9";
      break;
    default:
      break;
  }

  /* Button component */
  return (
    <button
      className={`w-full ${bgClassname} font-medium uppercase cursor-pointer text-sm p-2 md:text-base md:p-3 rounded-md`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
