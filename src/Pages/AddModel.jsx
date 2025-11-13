import React, { use } from "react";
import { TbContainerOff } from "react-icons/tb";
import Container from "../Components/Container";
import { AuthContext } from "../Provider/AuthContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const AddModel = () => {
  const { user } = use(AuthContext);
  const navigation = useNavigate();
  const handleAddModel = (e) => {
    e.preventDefault();
    const modeldata = {
      name: e.target.name.value,
      framework: e.target.framework.value,
      useCase: e.target.useCase.value,
      dataset: e.target.dataset.value,
      description: e.target.description.value,
      image: e.target.photoURL.value,
      createdBy: user.email,
      createdAt: new Date(),
      purchased: 0,
    };

    fetch("http://localhost:3000/models", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(modeldata),
    })
      .then((res) => res.json())
      .then(
        () => navigation("/all-models"),
        toast.success("Model added successfully....", { position: "top-right" })
      )
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <Container>
        <div className=" flex flex-col items-center justify-center min-h-screen">
          <h2 className="text-4xl text-secondary font-bold nuito-font mb-10">
            Add Model
          </h2>
          <div className="card bg-base-200 w-full max-w-sm shrink-0 ">
            <div className="card-body">
              <form onSubmit={handleAddModel} className="fieldset">
                <label className="label ">Name</label>
                <input
                  name="name"
                  type="text"
                  className="input w-full"
                  placeholder="Name"
                />
                <label className="label ">Framework</label>
                <select
                  name="framework"
                  defaultValue="Pick a browser"
                  className="w-full select"
                >
                  <option disabled={true}>Framework</option>
                  <option>TensorFlow</option>
                  <option>PyTorch</option>
                </select>
                <label className="label ">Use Case</label>
                <input
                  name="useCase"
                  type="text"
                  className="input w-full"
                  placeholder="Use Case"
                />
                <label className="label ">Dataset</label>
                <input
                  name="dataset"
                  type="text"
                  className="input w-full"
                  placeholder="Dataset"
                />
                <label className="label ">Description</label>
                <textarea
                  name="description"
                  type="textarea"
                  className="textarea w-full  py-2"
                  placeholder="Description"
                ></textarea>
                <label className="label ">Photo URL</label>
                <input
                  name="photoURL"
                  type="text"
                  className="input w-full"
                  placeholder="photoURL"
                />
                <button
                  type="submit"
                  className="btn bg-primary text-white mt-4 hover:bg-secondary border-none"
                >
                  Add Model
                </button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AddModel;
