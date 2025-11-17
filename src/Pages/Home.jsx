import React from "react";
import Container from "../Components/Container";
import LatestModels from "../Components/LatestModels";
import { useLoaderData} from "react-router";
import AboutAiModels from "../Components/AboutAiModels";
import GetStarted from "../Components/GetStarted";

const Home = () => {
  const data = useLoaderData();
  const latestModels = data.result;

  return (
    <div>
      <LatestModels latestModels={latestModels}></LatestModels>
      <AboutAiModels></AboutAiModels>
      <GetStarted></GetStarted>
    </div>
  );
};

export default Home;
