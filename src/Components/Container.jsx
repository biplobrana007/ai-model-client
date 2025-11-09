import React from "react";

const Container = ({ className, children }) => {
  return <div className={`${className} w-11/12 mx-auto`}>{children}</div>;
};

export default Container;
