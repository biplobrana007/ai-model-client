import React from "react";
import { Link, useLoaderData } from "react-router";
import Container from "../Components/Container";

const ModelDetails = () => {
  const data = useLoaderData();
  const model = data.result;
  console.log(model);
  return (
    <div>
      <Container>
        <div className=" mt-10 rounded-2xl p-5 border border-gray-200 shadow">
          <div
            style={{ background: `url(${model.image})` }}
            className="h-100  rounded-2xl bg-no-repeat! shadow bg-center! bg-cover! w-100"
          ></div>
          <div className="border-b border-gray-200 my-5"></div>
          <h2 className="text-2xl font-semibold">{model.name}</h2>
          <div>
            <h2></h2>
          </div>
          <div className="flex gap-5 max-md:flex-col my-5">
            <p className="border  w-fit px-3 rounded-full bg-blue-200 text-blue-600">
              {model.framework}
            </p>
            <p className="border  w-fit px-3 rounded-full bg-amber-200 text-amber-600">
              {model.useCase}
            </p>
          </div>
          <p>{model.description}</p>

          <div>
            <p className="text-gray-500 mt-5">
              <span className="text-black">CreatedBy:</span> {model.createdBy}
            </p>
          </div>
          <div className="flex gap-5 mt-5">
            <Link className="btn">Update</Link>
            <Link className="btn">Delete</Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ModelDetails;
