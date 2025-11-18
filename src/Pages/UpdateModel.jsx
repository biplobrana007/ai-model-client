import React from "react";
import Container from "../Components/Container";
import { useLoaderData, useNavigate, useParams } from "react-router";
import toast from "react-hot-toast";

const UpdateModel = () => {
  const navigation = useNavigate();
  const { id } = useParams();
  const allmodel = useLoaderData();
  const model = allmodel.find((model) => model._id === id);

  const handleUpdateModel = (e) => {
    e.preventDefault();
    const modeldata = {
      name: e.target.name.value,
      framework: e.target.framework.value,
      useCase: e.target.useCase.value,
      dataset: e.target.dataset.value,
      description: e.target.description.value,
      image: e.target.photoURL.value,
    };

    fetch(`https://ai-model-server-pi.vercel.app/models/${model._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(modeldata),
    })
      .then((res) => res.json())
      .then(
        navigation(-1),
        toast.success("Model updated successfully....", {
          position: "top-right",
        })
      )
      .catch((err) => console.log(err));
  };
  return (
    <div className="">
      <Container>
        <div className=" flex flex-col items-center justify-center min-h-screen">
          <h2 className="text-4xl text-secondary font-bold nuito-font mb-10">
            Update Model
          </h2>
          <div className="card bg-base-200 w-full max-w-sm shrink-0 ">
            <div className="card-body">
              <form onSubmit={handleUpdateModel} className="fieldset">
                <label className="label ">Name</label>
                <input
                  name="name"
                  defaultValue={model.name}
                  type="text"
                  className="input w-full"
                  placeholder="Name"
                />
                <label className="label ">Framework</label>
                <select
                  name="framework"
                  defaultValue={model.framework}
                  className="w-full select"
                >
                  <option disabled={true}>Framework</option>
                  <option>TensorFlow</option>
                  <option>PyTorch</option>
                  <option>LangChain</option>
                  <option>Keras</option>
                  <option>Scikit-Learn</option>
                </select>
                <label className="label ">Use Case</label>
                <input
                  name="useCase"
                  type="text"
                  defaultValue={model.useCase}
                  className="input w-full"
                  placeholder="Use Case"
                />
                <label className="label ">Dataset</label>
                <input
                  name="dataset"
                  type="text"
                  defaultValue={model.dataset}
                  className="input w-full"
                  placeholder="Dataset"
                />
                <label className="label ">Description</label>
                <textarea
                  name="description"
                  type="textarea"
                  defaultValue={model.description}
                  className="textarea w-full  py-2"
                  placeholder="Description"
                ></textarea>
                <label className="label ">Photo URL</label>
                <input
                  name="photoURL"
                  type="text"
                  defaultValue={model.image}
                  className="input w-full"
                  placeholder="photoURL"
                />
                <button
                  type="submit"
                  className="btn bg-primary text-white mt-4 hover:bg-secondary border-none"
                >
                  Update
                </button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default UpdateModel;
