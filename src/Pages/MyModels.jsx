import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthContext";
import Container from "../Components/Container";
import Model from "../Components/Model";

const MyModels = () => {
  const [models, setModels] = useState([]);
  const { user } = use(AuthContext);
  useEffect(() => {
    fetch(`http://localhost:3000/my-models?email=${user && user.email}`)
      .then((res) => res.json())
      .then((data) => setModels(data));
  }, [user]);
  console.log(models);
  return (
    <div className="py-10 bg-amber-50">
      <Container className="lg:w-10/12 xl:w-8/12">
        <div>
          <h2 className="font-semibold text-center text-3xl mb-5">
            My Models
          </h2>
        </div>
        <div className="grid max-sm:grid-cols-1 max-lg:grid-cols-2 grid-cols-3 gap-5">
          {models.map((model) => (
            <Model key={model._id} model={model}></Model>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default MyModels;
