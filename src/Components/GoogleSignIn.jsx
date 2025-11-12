import React, { use } from "react";
import { Link, useNavigate } from "react-router";
import { FaGoogle } from "react-icons/fa6";
import toast from "react-hot-toast";
import { AuthContext } from "../Provider/AuthContext";

const GoogleSignIn = () => {
  const navigation = useNavigate();
  const { signInWithGoogle } = use(AuthContext);
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(() => {
        navigation("/");
        toast.success("Google sign in successfully....", {
          position: "top-right",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Link className="btn" onClick={handleGoogleSignIn}>
        <FaGoogle></FaGoogle> Continue With Google
      </Link>
    </>
  );
};

export default GoogleSignIn;
