import React from "react";
import Model from "./Model";
import Container from "./Container";

const LatestModels = ({latestModels}) => {
  return (
    <div className="py-15  bg-amber-50">
      <Container className="lg:w-10/12 xl:w-8/12">
        <div>
          <h2 className="text-black font-semibold text-center text-3xl mb-5">
            Latest Models
          </h2>
        </div>
        <div className="grid max-sm:grid-cols-1 max-lg:grid-cols-2 grid-cols-3 gap-5">
          {latestModels.map((model) => (
            <Model key={model._id} model={model}></Model>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default LatestModels;
