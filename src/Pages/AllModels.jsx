import React, { useState } from "react";
import { useLoaderData } from "react-router";
import Container from "../Components/Container";
import Model from "../Components/Model";

const AllModels = () => {
  const allmodel = useLoaderData();
  const [models, setModels] = useState(allmodel);

  const handleSearch = (e) => {
    e.preventDefault();
    const value = e.target.search.value;
    console.log(value);

    const modelsBySearch = allmodel.filter((model) =>
      model.name.toLowerCase().includes(value.toLowerCase())
    );
    setModels(modelsBySearch);
  };
  return (
    <div className=" min-h-screen py-10 bg-amber-50">
      <Container className="lg:w-10/12 xl:w-8/12">
        <div>
          <h2 className="font-semibold text-center text-3xl mb-5">
            All Models
          </h2>
        </div>
        <form onSubmit={handleSearch} className="text-center mb-10 space-y-3">
          <label className="input rounded-full">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input name="search" type="search" placeholder="Search" />
          </label>
          <button className="btn ml-2 rounded-full">Serach</button>
        </form>

        {models.length ? (
          <div className="grid max-sm:grid-cols-1 max-lg:grid-cols-2 grid-cols-3 gap-5">
            {models.map((model) => (
              <Model key={model._id} model={model}></Model>
            ))}
          </div>
        ) : (
          <p className="text-center text-2xl">No Models Found</p>
        )}
      </Container>
    </div>
  );
};

export default AllModels;
