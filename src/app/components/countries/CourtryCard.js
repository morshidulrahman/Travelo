import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { Link } from "react-router-dom";

const CourtryCard = ({ country }) => {
  const {
    _id,
    average_cost,
    location,
    country_name,
    image_url,
    tourists_spot_name,
    seasonality,
    short_description,
  } = country;

  return (
    <div className="rounded-lg bg-gray-100">
      <div className="overflow-hidden h-[250px] w-full rounded-t-lg relative">
        <img
          src={image_url}
          alt={tourists_spot_name}
          className="w-full h-full duration-300 hover:scale-105 transition-all"
        />
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
        <div className="h-20 overflow-hidden p-2">
          <p>{short_description}</p>
        </div>
        <div className="flex gap-2 items-center bg-white rounded-md py-2 px-5 justify-between w-full my-4">
          <div className="flex gap-2 items-center">
            <div className="flex gap-2 items-center">
              <TiWeatherPartlySunny size={22} />
              <p>{seasonality}</p>
            </div>
          </div>
          <div className="flex gap-1 items-center">
            <MdAttachMoney size={22} />
            <p className="font-semibold">{average_cost}</p>
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

export default CourtryCard;
