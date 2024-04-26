import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
import { FaUsers, FaHeart, FaStar } from "react-icons/fa";

const SingleTouristCard = ({ tourist }) => {
  const {
    average_cost,
    location,
    country_name,
    image_url,
    rating,
    reviews_number,
    total_visitors_per_year,
    travel_time,
    tourists_spot_name,
  } = tourist;
  return (
    <div className="rounded-lg bg-gray-100">
      <div className="overflow-hidden h-[250px] w-full rounded-t-lg relative">
        <img
          src="https://i.ibb.co/ZNXqPQs/photo-1534269222346-5a896154c41d.jpg"
          alt="jl"
          className="w-full h-full duration-300 hover:scale-105 transition-all"
        />
        <div className="absolute bottom-3 left-4 flex gap-3">
          <div className="bg-white px-2 py-1 rounded ">Featured</div>
          <div className="bg-white p-2 rounded">
            <FaHeart size={16} className="text-[#F26f55]" />
          </div>
        </div>
      </div>
      <div className="p-5 border border-gray-200 border-t-0 rounded-b-lg">
        <div className="flex gap-2 items-center text-[#017b6e]">
          <span>
            <FaMapMarkerAlt size={20} />
          </span>
          <p className="capitalize text-lg font-semibold">
            {location} , {country_name}
          </p>
        </div>
        <h3 className="py-3 capitalize font-semibold">{tourists_spot_name}</h3>
        <div className="flex gap-2 items-center bg-white rounded-lg py-2 px-5">
          <div className="flex gap-2 items-center w-1/2">
            <FaRegClock size={18} />
            <p>{travel_time}</p>
          </div>
          <div className="flex gap-2 items-center w-1/2">
            <FaUsers size={20} />
            <p>{total_visitors_per_year}</p>
          </div>
        </div>
        <div className="py-3 flex items-center   px-2">
          <div className="flex space-x-1 w-1/2">
            <p>From:</p>
            <p className="font-bold">{average_cost}</p>
          </div>
          <div className="flex gap-2 w-1/2">
            <FaStar size={20} className="text-yellow-500" />
            <p>
              {rating} ({reviews_number} reviews)
            </p>
          </div>
        </div>

        <button className="bg-[#F26f55] text-white px-4 py-2 rounded-md hover:bg-transparent hover:text-[#F26f55] duration-300 transition-all border border-[#F26f55] w-full text-center">
          View details
        </button>
      </div>
    </div>
  );
};

export default SingleTouristCard;
