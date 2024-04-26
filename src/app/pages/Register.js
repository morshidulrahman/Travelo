import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { UserAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [visable, setvisable] = useState(false);
  const [Error, setError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createUser, Googlelogin, updateUserProfile, setreload } =
    useContext(UserAuth);
  const navigate = useNavigate();

  const handleGoogle = () => {
    Googlelogin()
      .then((res) => {
        toast.success("user created successfully");
        navigate("/");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  const onSubmit = (data) => {
    const { email, password, name, photoURL } = data;
    createUser(email, password)
      .then(() => {
        toast.success("user created successfully");
        updateUserProfile(name, photoURL)
          .then(() => {
            setreload(true);
            navigate("/");
          })
          .catch((error) => {
            toast.error(error.message);
          });
      })
      .catch((e) => {
        setError(e.message);
      });
  };

  return (
    <div className="dark:bg-gray-900">
      <div className="flex items-center justify-center py-10">
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-100">
          <h1 className="text-2xl font-bold text-center">Register</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-1 text-sm">
              <label htmlFor="username" className="block dark:text-gray-600">
                Username
              </label>
              <input
                className="w-full px-4 py-3 rounded-lg bg-gray-50 outline-none"
                defaultValue=""
                placeholder="your name"
                {...register("name", { required: true })}
              />
              {errors?.name?.type === "required" && (
                <p className="text-red-600 font-semibold">
                  This field is required
                </p>
              )}
            </div>
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
                <p className="text-red-600 font-semibold">
                  This field is required
                </p>
              )}
            </div>
            <div className="space-y-1 text-sm">
              <label className="block dark:text-gray-600">PhotoURL</label>
              <input
                className="w-full px-4 py-3 rounded-lg bg-gray-50 outline-none"
                defaultValue=""
                placeholder=""
                {...register("photoURL", { required: true })}
              />
              {errors?.email?.type === "required" && (
                <p className="text-red-600 font-semibold">
                  This field is required
                </p>
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
              {Error && <p className="text-red-600 font-semibold">{Error}</p>}
              {errors?.password?.type === "pattern" && (
                <p className="text-red-600 font-semibold">
                  Password must contain at least one uppercase and lowercase
                  letter and be at least 6 characters long
                </p>
              )}
              {errors?.password?.type === "required" && (
                <p className="text-red-600 font-semibold">
                  This field is required
                </p>
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
              Sign up
            </button>
          </form>
          <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
            <p className="px-3 text-sm dark:text-gray-600">
              Login with social accounts
            </p>
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
          </div>
          <div className="flex justify-center space-x-4">
            <button
              aria-label="Log in with Google"
              className="p-3 rounded-sm"
              onClick={handleGoogle}
            >
              <FaGoogle size={25} />
            </button>
          </div>
          <p className="text-center sm:px-6 dark:text-gray-600">
            Already have an account?
            <Link
              rel="noopener noreferrer"
              to="/login"
              className="underline dark:text-gray-800"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
