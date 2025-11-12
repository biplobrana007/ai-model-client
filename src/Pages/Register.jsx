import React, { use, useState } from "react";

import { Link } from "react-router";
import { updateProfile } from "firebase/auth";

import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { AuthContext } from "../Provider/AuthContext";
import Container from "../Components/Container";
import toast from "react-hot-toast";
import GoogleSignIn from "../Components/GoogleSignIn";

const SignUp = () => {
  //   const navigate = useNavigate();
  const { createUser } = use(AuthContext);
  const [showPassword, setShowPassword] = useState(false);

  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const displayName = e.target.name.value;
    const photoURL = e.target.photo.value;

    // vallidation
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      toast.error(
        "Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long.",
        { position: "top-right" }
      );
      return;
    }

    createUser(email, password)
      .then((user) => {
        updateProfile(user.user, { displayName, photoURL })
          .then(() => {
            // navigate("/");
            toast.success("SignUp successfully......", {
              position: "top-right",
            });
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        toast.error(err.code, { position: "top-right" });
      });
  };

  return (
    <Container>
      <div className=" flex flex-col items-center justify-center min-h-screen">
        <h2 className="text-4xl text-secondary font-bold nuito-font mb-10">
          SignUp Here!
        </h2>
        <div className="card bg-base-200 w-full max-w-sm shrink-0 ">
          <div className="card-body">
            <form onSubmit={handleSignIn} className="fieldset">
              <label className="label ">Name</label>
              <input
                name="name"
                type="text"
                className="input w-full"
                placeholder="Name"
                required
              />
              <label className="label ">Photo URL</label>
              <input
                name="photo"
                type="text"
                className="input w-full"
                placeholder="Photo URL"
              />
              <label className="label ">Email</label>
              <input
                name="email"
                type="email"
                className="input w-full"
                placeholder="Email"
                required
              />
              <label className="label ">Password</label>
              <div className="relative">
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  className="input w-full"
                  placeholder="Password"
                  required
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="btn bg-transparent border-none right-0 absolute"
                >
                  {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                </span>
              </div>
              <button
                type="submit"
                className="btn bg-primary text-white mt-4 hover:bg-secondary border-none"
              >
                Register
              </button>
              <p className="text-center ">
                Already have an account?
                <Link
                  className="font-bold text-[15px] text-secondary hover:underline ml-1"
                  to="/auth/login"
                >
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
        <div className="mt-10">
          <GoogleSignIn></GoogleSignIn>
        </div>
      </div>
    </Container>
  );
};

export default SignUp;
