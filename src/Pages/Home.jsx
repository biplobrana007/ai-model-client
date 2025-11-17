import React from "react";
import Container from "../Components/Container";
import LatestModels from "../Components/LatestModels";
import { useLoaderData} from "react-router";
import AboutAiModels from "../Components/AboutAiModels";
import GetStarted from "../Components/GetStarted";
import Hero from "../Components/Hero";

const Home = () => {
  const data = useLoaderData();
  const latestModels = data.result;

  return (
    <div>
      <Hero></Hero>
      <LatestModels latestModels={latestModels}></LatestModels>
      <AboutAiModels></AboutAiModels>
      <GetStarted></GetStarted>
    </div>
  );
};

export default Home;
