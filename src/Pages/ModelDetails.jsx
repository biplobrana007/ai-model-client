import React, { use, useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router";
import Container from "../Components/Container";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthContext";
import toast from "react-hot-toast";

const ModelDetails = () => {
  const { user } = use(AuthContext);
  const data = useLoaderData();
  const model = data.result;

  const [purchasedCount, setPurchasedCount] = useState(model.purchased);


  const navigation = useNavigate();

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/models/${model._id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then(
            () => navigation("/all-models"),
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            })
          )
          .catch((err) => console.log(err));
      }
    });
  };

  const handlePurchased = () => {
    const finalModel = {
      name: model.name,
      useCase: model.useCase,
      framework: model.framework,
      description: model.description,
      createdBy: model.createdBy,
      createdAt: model.createdAt,
      dataset: model.dataset,
      image: model.image,
      purchasedBy: user && user.email,
    };
    fetch(`http://localhost:3000/purchased-models/${model._id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(finalModel),
    })
      .then((res) => res.json())
      .then(
        setPurchasedCount(purchasedCount + 1),
        toast.success("Purchased successfully......", { position: "top-right" })
      );
  };

  return (
    <div>
      <Container>
        <div className=" my-10 rounded-2xl p-5 border border-gray-200 shadow">
          <div
            style={{ background: `url(${model.image})` }}
            className="h-100  rounded-2xl bg-no-repeat! shadow bg-center! bg-cover! max-w-100"
          ></div>
          <div className="border-b border-gray-200 my-5"></div>
          <h2 className="text-2xl font-semibold">{model.name}</h2>

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
          <div className="border w-fit px-5 rounded-full mt-2 py-2 border-amber-400">
            <p className="text-gray-500 font-semibold">
              <span className="text-black mr-2">Purchased:</span>{" "}
              {purchasedCount}
            </p>
          </div>
          <div className="flex gap-5 mt-5">
            <Link
              to={`/update-model/${model._id}`}
              className="btn bg-linear-[25deg,#FD1D1D,#FCB045] text-white border-none"
            >
              Update
            </Link>
            <button
              onClick={handlePurchased}
              className="btn bg-linear-[25deg,#FD1D1D,#FCB045] text-white border-none"
            >
              Purchase
            </button>
            <button onClick={handleDelete} className="btn">
              Delete
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ModelDetails;
