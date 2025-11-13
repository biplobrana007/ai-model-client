import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router";

const Model = ({ model }) => {
  return (
    <div className=" rounded-2xl overflow-hidden shadow ">
      <div
        style={{ background: `url(${model.image})` }}
        className=" bg-center! bg-cover! h-60 bg-white!  bg-no-repeat!"
      ></div>
      <div className="p-2">
        <div>
          <h2 className="text-xl font-semibold">{model.name}</h2>
          <div className="">
            <h4 className="border w-fit px-4 py-1 rounded-full bg-cyan-200 text-cyan-900 mt-2">
              {model.framework}
            </h4>
            <h4 className="border w-fit px-4 py-1 rounded-full bg-amber-200 text-amber-900 mt-2">
              {model.useCase}
            </h4>
          </div>
          <p className="mt-5 text-gray-500">{model.description}</p>
          <div className="flex justify-center items-center gap-1 py-3">
            <Link to={`/model-details/${model._id}`}>View Details</Link>
            <FaArrowRightLong></FaArrowRightLong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Model;
