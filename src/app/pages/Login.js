import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { UserAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const [visable, setvisable] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signinUser, Googlelogin } = useContext(UserAuth);
  const onSubmit = (data) => {
    const { email, password } = data;
    signinUser(email, password)
      .then(() => {
        toast.success("login successful");
        navigate(from);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  const handleGoogle = () => {
    Googlelogin()
      .then((res) => {
        toast.success("login successfully");
        navigate(from);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <>
      <div className="flex items-center justify-center py-10">
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-100  ">
          <h1 className="text-2xl font-bold text-center">Login</h1>
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-1 text-sm">
              <label htmlFor="username" className="block dark:text-gray-600">
                Email
              </label>
              <input
                type="mail"
                className="w-full px-4 py-3 rounded-lg bg-gray-50 outline-none"
                defaultValue=""
                placeholder="abc@example.com"
                {...register("email", { required: true })}
              />
              {errors?.email?.type === "required" && (
                <p className="text-red-600">This field is required</p>
              )}
            </div>
            <div className="space-y-1 text-sm relative">
              <label htmlFor="password" className="block dark:text-gray-600">
                Password
              </label>
              <input
                className="w-full px-4 py-3 rounded-lg bg-gray-50 outline-none"
                defaultValue=""
                type={visable ? "text" : "password"}
                placeholder="your password"
                {...register("password", {
                  required: true,
                  pattern: /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/,
                })}
              />
              {errors?.password?.type === "pattern" && (
                <p className="text-red-600">
                  Password must contain at least one uppercase letter and be at
                  least 6 characters long
                </p>
              )}
              {errors?.password?.type === "required" && (
                <p className="text-red-600">This field is required</p>
              )}
              <div
                className="absolute top-8 right-2"
                onClick={() => setvisable(!visable)}
              >
                {visable ? (
                  <IoMdEyeOff size={25} className="text-[#F26f55] " />
                ) : (
                  <IoMdEye size={25} className="text-[#F26f55]" />
                )}
              </div>
            </div>
            <button className="block w-full p-3 text-center rounded-lg text-white bg-[#F26f55] transition-all duration-300 hover:scale-105 hover:bg-transparent  border  border-[#F26f55] hover:text-[#F26f55]">
              Sign in
            </button>
          </form>
          <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
            <p className="px-3 text-sm dark:text-gray-600">
              Login with social accounts
            </p>
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
          </div>
          <div className="flex justify-center space-x-4" onClick={handleGoogle}>
            <button
              aria-label="Log in with Google"
              className="p-3 rounded-sm hover:scale-110 transition-all duration-300"
            >
              <FaGoogle size={25} />
            </button>
          </div>
          <p className=" text-center px-6 text-gray-600">
            Don't have an account?
            <Link to="/register" className="underline dark:text-gray-800">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
