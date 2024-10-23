import React from "react";

const ContentWrapper = ({ children, className }) => {
  return (
    <div
      className={`p-4 md:px-14 m-auto md:text-sm lg:text-xl xl:text-xl 2xl:text-2xl relative mx-w-[1240px] ${className}`}
    >
      {children}
    </div>
  );
};

export default ContentWrapper;
