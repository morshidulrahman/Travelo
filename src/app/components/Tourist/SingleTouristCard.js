import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
import { FaUsers, FaHeart, FaStar } from "react-icons/fa";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { Link } from "react-router-dom";
const SingleTouristCard = ({ tourist }) => {
  const {
    _id,
    average_cost,
    location,
    country_name,
    rating,
    reviews_number,
    total_visitors_per_year,
    travel_time,
    image_url,
    tourists_spot_name,
    seasonality,
  } = tourist;

  return (
    <div className="rounded-lg bg-gray-100">
      <div className="overflow-hidden h-[250px] w-full rounded-t-lg relative">
        <img
          src={image_url}
          alt={tourists_spot_name}
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
        <h3 className="py-3 capitalize font-semibold pl-1">
          {tourists_spot_name}
        </h3>
        <div className="flex gap-2 items-center bg-white rounded-lg py-2 px-5 justify-between flex-wrap">
          <div className="flex gap-2 items-center">
            <FaRegClock size={18} />
            <p>{travel_time} days</p>
          </div>
          <div className="flex gap-2 items-center">
            <FaUsers size={20} />
            <p>{total_visitors_per_year}</p>
          </div>
          <div className="flex gap-2 items-center">
            <TiWeatherPartlySunny size={20} />
            <p>{seasonality}</p>
          </div>
        </div>
        <div className="py-3 flex items-centerpx-2">
          <div className="flex space-x-1 w-1/2">
            <p>From:</p>
            <p className="font-bold">${average_cost}</p>
          </div>
          <div className="flex gap-2 lg:w-1/2 md:w-[70%]">
            <FaStar size={20} className="text-yellow-500" />
            <p>
              {rating} ({reviews_number} reviews)
            </p>
          </div>
        </div>
        <Link to={`/tourist/${_id}`}>
          <button className="bg-[#F26f55] text-white px-4 py-2 rounded-md hover:bg-transparent hover:text-[#F26f55] duration-300 transition-all border border-[#F26f55] w-full text-center">
            View details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SingleTouristCard;
