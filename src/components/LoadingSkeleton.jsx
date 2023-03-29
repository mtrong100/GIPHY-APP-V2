import React from "react";

const LoadingSkeleton = (props) => {
  return (
    <div
      className="skeleton h-[150px] lg:h-[300px] md:h-[200px]"
      style={{
        height: props.height,
        width: props.width || "100%",
        borderRadius: props.radius || "6px",
      }}
    ></div>
  );
};

export default LoadingSkeleton;
