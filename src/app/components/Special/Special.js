import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const Special = () => {
  return (
    <div className="py-10 container mx-auto px-5">
      <h1 className="text-4xl font-extrabold text-center capitalize dark:text-white">
        Special Offers
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 py-16">
        <div className="h-[400px] rounded-md bg-[url('https://i.ibb.co/ZNXqPQs/photo-1534269222346-5a896154c41d.jpg')] p-10">
          <p className="text-[#F26f55] capitalize italic py-3 text-xl">
            save up to
          </p>
          <h1 className="text-white font-extrabold text-5xl">50% </h1>
          <p className="py-5 text-white font-semibold text-xl">
            Let’s Explore The World
          </p>
          <div className="flex gap-2 items-center text-white">
            <span>
              <FaMapMarkerAlt size={20} />
            </span>
            <p className="capitalize   font-semibold text-xl  ">
              Bangkok , Thailand
            </p>
          </div>
          <button className="mt-8 bg-[#F26f55] text-white px-4 py-2  hover:bg-transparent hover:text-[#F26f55] duration-300 transition-all border border-[#F26f55] capitalize rounded-full">
            Booking now
          </button>
        </div>

        <div className="h-[400px] rounded-md bg-[url('https://i.ibb.co/QXTvJZ7/banner4.jpg')] p-10">
          <h1 className="text-white font-extrabold text-5xl capitalize w-[70%] lg:w-[40%] leading-[50px]">
            Near By Hotel{" "}
          </h1>
          <p className="py-5 text-white font-semibold text-xl w-[60%] lg:w-[40%]">
            Up to <span className="text-[#F26f55]">50%</span> Off The Best
            Hotels Near
          </p>
          <div className="flex gap-2 items-center text-white">
            <span>
              <FaMapMarkerAlt size={20} />
            </span>
            <p className="capitalize   font-semibold text-xl  ">
              Bangkok , Thailand
            </p>
          </div>
          <button className="mt-8 bg-[#F26f55] text-white px-4 py-2  hover:bg-transparent hover:text-[#F26f55] duration-300 transition-all border border-[#F26f55] capitalize rounded-full">
            Booking now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Special;
