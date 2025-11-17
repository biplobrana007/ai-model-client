import React, { use } from "react";
import Container from "./Container";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthContext";

const GetStarted = () => {
  const { user } = use(AuthContext);
  return (
    <div className="bg-linear-[45deg,#FD1D1D,#FCB045] py-15">
      <Container>
        <div>
          <div>
            <h2 className="font-semibold text-center text-3xl mb-2">
              Get Started
            </h2>

            <p className="text-center">
              {user
                ? "You're already logged in!"
                : "Sign up or log in now to begin your journey and access your personal AI dashboard"}
            </p>
            <div className="flex justify-center gap-4 mt-7">
              {user ? (
                <Link className="btn border-none bg-linear-[25deg,#FD1D1D,#FCB045]">
                  Go To Dashboard
                </Link>
              ) : (
                <>
                  <Link className="btn border-none bg-linear-[25deg,#FD1D1D,#FCB045]">
                    Login
                  </Link>
                  <Link className="btn border-none bg-linear-[25deg,#FD1D1D,#FCB045]">
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default GetStarted;
