import React, { useState } from "react";
import { useLoaderData } from "react-router";
import Container from "../Components/Container";
import Model from "../Components/Model";

const AllModels = () => {
  const allmodel = useLoaderData();
  const [models, setModels] = useState(allmodel);
  const [sortBy, setSortBy] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    const value = e.target.search.value;

    const modelsBySearch = allmodel.filter((model) =>
      model.name.toLowerCase().includes(value.toLowerCase())
    );
    setModels(modelsBySearch);
  };

  const sortedModels = () => {
    if (sortBy === "TensorFlow") {
      return models.filter((model) => model.framework === "TensorFlow");
    }
    if (sortBy === "Pytorch") {
      return models.filter((model) => model.framework === "Pytorch");
    }
    if (sortBy === "LangChain") {
      return models.filter((model) => model.framework === "LangChain");
    }
    if (sortBy === "Keras") {
      return models.filter((model) => model.framework === "Keras");
    }
    if (sortBy === "Scikit-Learn") {
      return models.filter((model) => model.framework === "Scikit-Learn");
    }
    return models;
  };


  return (
    <div className=" min-h-screen py-10 bg-amber-50">
      <Container className="lg:w-10/12 xl:w-8/12">
        <div>
          <h2 className="text-black font-semibold text-center text-3xl mb-5">
            All Models
          </h2>
        </div>
        <form onSubmit={handleSearch} className="flex  justify-center mb-10">
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

        <div className="max-md:flex-col-reverse max-md:items-start gap-5 flex justify-between items-center mb-5">
          <select
            aria-placeholder="shot"
            className="select select-bordered "
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="none">All</option>
            <option value="TensorFlow">TensorFlow</option>
            <option value="PyTorch">PyTorch</option>
            <option value="LangChain">LangChain</option>
            <option value="Keras">Keras</option>
            <option value="Scikit-Learn">Scikit-Learn</option>
          </select>
        </div>

        {sortedModels().length ? (
          <div className="grid max-sm:grid-cols-1 max-lg:grid-cols-2 grid-cols-3 gap-5">
            {sortedModels().map((model) => (
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
