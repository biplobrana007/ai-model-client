import React, { use, useState } from "react";
import Container from "../Components/Container";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthContext";
import toast from "react-hot-toast";

const Login = () => {
  const { signInUser, user } = use(AuthContext);
  console.log(user);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then(() => {
        // Signed in
        toast.success("Login successfully......", { position: "top-right" });
        // navigation(`${location.state ? location.state : "/"}`);
        // ...
      })
      .catch(() => {
        toast.success("Invalid credential!", { position: "top-right" });
      });
  };

  return (
    <Container>
      <div className=" flex flex-col items-center justify-center min-h-screen">
        <h2 className="text-4xl text-secondary font-bold nuito-font mb-10">
          Login Here!
        </h2>
        <div className="card bg-base-200 w-full max-w-sm shrink-0 ">
          <div className="card-body">
            <form onSubmit={handleLogin} className="fieldset">
              <label className="label ">Email</label>
              <input
                name="email"
                type="email"
                className="input w-full"
                placeholder="Email"
              />
              <label className="label ">Password</label>
              <div className="relative">
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  className="input w-full"
                  placeholder="Password"
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="btn bg-transparent border-none right-0 absolute"
                >
                  {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                </span>
              </div>
              <span>Forgot Password?</span>
              <button
                type="submit"
                className="btn bg-primary text-white mt-4 hover:bg-secondary border-none"
              >
                Login
              </button>
              <p className="text-center ">
                No account?{" "}
                <Link
                  className="font-bold text-[15px]  text-secondary hover:underline ml-1"
                  to="/auth/register"
                >
                  Register
                </Link>
              </p>
            </form>
          </div>
        </div>
        {/* <div className="mt-10">
          <GoogleSignIn></GoogleSignIn>
        </div> */}
      </div>
    </Container>
  );
};

export default Login;
