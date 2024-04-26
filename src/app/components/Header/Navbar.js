import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { GrFormClose } from "react-icons/gr";
import useTheme from "../../hook/useTheme";
import { BiSun } from "react-icons/bi";
import { BsMoonStarsFill } from "react-icons/bs";
import { UserAuth } from "../../context/AuthProvider";
import toast from "react-hot-toast";

function Navbar() {
  const [toggle, settoggle] = useState(false);

  const [nextTheme, setTheme] = useTheme();
  const { user, LogOut } = useContext(UserAuth);

  const navitems = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? " text-lg font-[600]   py-3  text-[#F26f55]" : "text-xl"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/alltorist"
          className={({ isActive }) =>
            isActive ? " text-xl font-[600]   py-3  text-[#F26f55]" : "text-xl"
          }
        >
          All Tourists Spot
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addtourist"
          className={({ isActive }) =>
            isActive ? " text-xl font-[600]   py-3  text-[#F26f55]" : "text-xl"
          }
        >
          Add Tourists Spot
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/mylist"
          className={({ isActive }) =>
            isActive ? " text-xl font-[600]   py-3  text-[#F26f55]" : "text-xl"
          }
        >
          My List
        </NavLink>
      </li>
    </>
  );

  const handleLogout = () => {
    LogOut();
    toast.success("Logged out successfully");
  };

  return (
    <nav className="w-full border-b dark:bg-gray-900 dark:text-white bg-white dark:border-b-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-5">
          <div className="flex space-x-2">
            <Link className="text-3xl font-bold font-heading" to="/">
              Travelo
            </Link>
          </div>
          <div>
            <ul
              className={` ${
                toggle
                  ? "flex  fixed top-0 right-0 w-48 bg-slate-100 dark:bg-gray-800 h-full flex-col justify-center items-center z-50 gap-2"
                  : "lg:flex items-center hidden md:space-x-4 lg:space-x-7"
              }`}
            >
              {navitems}
              <span
                className="lg:hidden absolute top-3 right-[155px] dark:text-white"
                onClick={() => settoggle(false)}
              >
                <GrFormClose
                  size={23}
                  className="dark:bg-white rounded-full text-gray-800"
                />
              </span>
            </ul>
          </div>
          <div className="flex items-center md:space-x-4 space-x-2">
            <div className="" onClick={() => setTheme(nextTheme)}>
              {nextTheme === "dark" ? (
                <BsMoonStarsFill size={23} />
              ) : (
                <BiSun size={23} />
              )}
            </div>
            <div className="relative">
              {!user ? (
                <div className="flex md:gap-4 gap-2">
                  <Link to="/login">
                    <button className="bg-[#F26f55] text-white px-4 py-2 rounded-md hover:bg-transparent hover:text-[#F26f55] duration-300 transition-all border border-[#F26f55]">
                      Login
                    </button>
                  </Link>
                  <Link to="/register">
                    <button className="bg-[#F26f55] text-white px-4 py-2 rounded-md hover:bg-transparent hover:text-[#F26f55] duration-300 transition-all border border-[#F26f55]">
                      Register
                    </button>
                  </Link>
                </div>
              ) : (
                <div className="flex gap-4 items-center">
                  <img
                    data-tooltip-id="my-tooltip"
                    src={user?.photoURL}
                    alt="me"
                    className="h-10 w-10 rounded-full p-1 bg-black"
                  />
                  <button
                    onClick={handleLogout}
                    className="bg-[#F26f55] text-white px-4 py-2 rounded-md hover:bg-transparent hover:text-[#F26f55] duration-300 transition-all border border-[#F26f55] "
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>

            <span
              className="lg:hidden block dark:text-white"
              onClick={() => settoggle(true)}
            >
              <AiOutlineMenu size={22} />
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
