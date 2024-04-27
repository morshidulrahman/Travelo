import React, { useEffect, useState } from "react";
import { FaMapMarkerAlt, FaRegClock, FaStar, FaUsers } from "react-icons/fa";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { useParams } from "react-router-dom";

const TouristDetails = () => {
  const [tourist, setTourist] = useState("");
  const [loading, setloading] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    setloading(true);
    const fetchdata = async () => {
      const res = await fetch(`http://localhost:5000/travels/${id}`);
      const data = await res.json();
      setTourist(data);
      setloading(false);
    };
    fetchdata();
  }, []);

  const {
    name,
    seasonality,
    country_name,
    email,
    total_visitors_per_year,
    travel_time,
    average_cost,
    short_description,
    location,
    tourists_spot_name,
    image_url,
    reviews_number,
    rating,
  } = tourist;

  return (
    <div>
      <div className="bg-[url('https://i.ibb.co/ZNXqPQs/photo-1534269222346-5a896154c41d.jpg')] h-[350px] w-full flex justify-center items-center relative ">
        <h1 className="text-center text-white font-extrabold text-4xl">
          Tourist details
        </h1>
        <div className="bg-black w-full absolute top-0 left-0 h-full opacity-20"></div>
      </div>
      <div className="flex gap-6 py-16 container mx-auto px-4 justify-between">
        <div className="w-[48%] h-[400px]">
          <img
            src="https://i.ibb.co/ZNXqPQs/photo-1534269222346-5a896154c41d.jpg"
            alt="image"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div className="w-[48%] bg-gray-100 px-5 py-3 rounded-md">
          <div className="flex gap-2 items-center text-[#017b6e] text-xl py-2">
            <span>
              <FaMapMarkerAlt size={20} />
            </span>
            <p className="capitalize text-2xl font-semibold py-2">
              {location} , {country_name}
            </p>
          </div>
          <h1 className="font-bold text-2xl">{tourists_spot_name}</h1>
          <p className="py-5 ">{short_description}</p>
          <div className="flex gap-2 items-center bg-white rounded-lg py-3 px-5 justify-between">
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

          <div className="py-5 flex items-center justify-between px-2">
            <div className="flex space-x-1 ">
              <p className="text-xl">From:</p>
              <p className="font-bold text-xl"> ${average_cost}</p>
            </div>
            <div className="flex gap-2 ">
              <FaStar size={20} className="text-yellow-500" />
              <p>
                {rating} ({reviews_number} reviews)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TouristDetails;
