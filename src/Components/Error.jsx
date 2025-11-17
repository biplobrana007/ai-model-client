import React from "react";
import errorImg from "../assets/error-404.png";
import { Link } from "react-router";

const Error = () => {
  return (
    <div className="py-20">
      <div className="flex items-center justify-center flex-col text-center">
        <img src={errorImg} alt="" />
        <div className="text-3xl md:text-5xl mt-8 font-bold">
          Oops, page not found!
        </div>
        <p className="text-gray-500 my-4">
          The page you are looking for is not available.
        </p>
        <Link to={-1} className="btn">
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default Error;
