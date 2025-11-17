import React, { use } from "react";
import { Link, NavLink } from "react-router";
import Logo from "./Logo";
import Container from "./Container";
import { AuthContext } from "../Provider/AuthContext";
import { auth } from "../firebase/firebase.config";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, setUser, logOut } = use(AuthContext);
  const links = (
    <>
      <NavLink
        className=" px-3 py-1 rounded-full hover:bg-linear-[25deg,#FD1D1D,#FCB045] hover:text-white"
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className=" px-3 py-1 rounded-full hover:bg-linear-[25deg,#FD1D1D,#FCB045] hover:text-white"
        to="/all-models"
      >
        All Models
      </NavLink>
      <NavLink
        className=" px-3 py-1 rounded-full hover:bg-linear-[25deg,#FD1D1D,#FCB045] hover:text-white"
        to="/add-model"
      >
        Add Model
      </NavLink>
    </>
  );

  const handleSignout = () => {
    logOut(auth)
      .then(() => {
        setUser(null);
        toast.success("Logout Succesfully---");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <nav className="bg-base-100 shadow-sm">
      <Container>
        <div className="navbar px-0">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="hover:text-[#FD1D1D] lg:hidden cursor-pointer mr-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content gap-1 bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
              >
                {links}
              </ul>
            </div>
            <div>
              <Logo></Logo>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-4">{links}</ul>
          </div>
          <div className="navbar-end gap-4">
            {user && (
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src={user && user.photoURL}
                    />
                  </div>
                </div>
                <ul
                  tabIndex="-1"
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                >
                  <div className="py-5 text-center font-semibold rounded-box shadow mb-5">
                    <h2 className="capitalize">{user && user.displayName}</h2>
                    <h2>{user && user.email}</h2>
                  </div>
                  <li>
                    <Link to={`/my-purchased-models`}>My Purchased Models</Link>
                  </li>
                  <li>
                    <Link to={`/my-models`}>My Models</Link>
                  </li>
                </ul>
              </div>
            )}
            {user ? (
              <Link
                onClick={handleSignout}
                to="/"
                className=" font-semiboldr hover:bg-linear-[25deg,#FD1D1D,#FCB045] bg-clip-text hover:text-transparent"
              >
                Logout
              </Link>
            ) : (
              <Link
                to="/auth/login"
                className=" font-semiboldr hover:bg-linear-[25deg,#FD1D1D,#FCB045] bg-clip-text hover:text-transparent"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
