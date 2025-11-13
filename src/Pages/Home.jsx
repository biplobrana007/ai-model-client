import React from "react";
import Container from "../Components/Container";
import LatestModels from "../Components/LatestModels";
import { useLoaderData } from "react-router";

const Home = () => {
  const data = useLoaderData();
  const latestModels = data.result;
  console.log(latestModels);
  return (
    <div>
      <LatestModels latestModels={latestModels}></LatestModels>
    </div>
  );
};

export default Home;
