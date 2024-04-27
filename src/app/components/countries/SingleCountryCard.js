import React from "react";
import { Link } from "react-router-dom";

const SingleCountryCard = ({ country }) => {
  return (
    <Link to={`/allcountry/${country.country_name}`}>
      <div className="rounded-lg bg-gray-100">
        <div className="overflow-hidden h-[250px] w-full rounded-t-lg relative">
          <img
            src={country.image}
            alt={country.country_name}
            className="w-full h-full duration-300 hover:scale-105 transition-all"
          />
        </div>
        <div className="p-5 border border-gray-200 border-t-0 rounded-b-lg">
          <div className="flex gap-2 items-center text-[#017b6e]">
            <p className="capitalize text-lg font-semibold">
              {country.country_name}
            </p>
          </div>
          <p className="py-3 overflow-hidden h-20 ">{country.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default SingleCountryCard;
