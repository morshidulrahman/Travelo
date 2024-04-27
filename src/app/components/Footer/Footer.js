import React from "react";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer_image">
      <div className="container mx-auto px-4">
        <div className="flex gap-10 pt-20 pb-10 justify-between w-full lg:flex-row flex-col ">
          <h2 className="text-5xl font-extrabold text-white w-[90%] lg:w-[60%] leading-[60px]">
            <span className="text-[#F26f55]"> Travelo</span> beyond your
            imagination, with our Travel Agency!
          </h2>
          <div className="w-full lg:w-1/3">
            <h1 className="font-bold text-white text-3xl pb-5 mt-1">Adress</h1>
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-white">1080 Brickell Ave</p>
              <p className="font-semibold text-white">Ha Long Bay</p>
              <p className="font-semibold text-white">Siem Reap , Cambodia</p>
            </div>
            <div className="flex gap-2 py-2">
              <FaFacebook size={20} className="text-white" />
              <FaTwitter size={20} className="text-white" />
              <FaYoutube size={20} className="text-white" />
            </div>
          </div>
          <div className=" w-full lg:w-1/3">
            <h1 className="font-bold text-white text-3xl pb-5">Contact</h1>
            <div className="flex flex-col gap-4">
              <button className="bg-[#F26f55] text-white px-6 py-3 rounded-md hover:bg-transparent hover:text-[#F26f55] duration-300 transition-all border border-[#F26f55] w-fit">
                info@travel.com
              </button>
              <p className="text-white font-extrabold text-2xl">
                + 01 483 593 284
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center py-5">
          <p
            className="
            text-white text-center"
          >
            © 2024 Morshidul. All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
