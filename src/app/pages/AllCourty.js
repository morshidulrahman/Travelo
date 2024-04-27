import React, { useEffect, useState } from "react";

import { Link, useParams } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { MdAttachMoney } from "react-icons/md";
import CourtryCard from "../components/countries/CourtryCard";
import Loader from "../components/loader/Loader";

const AllCourty = () => {
  const [country, setcountry] = useState();
  const [loading, setloading] = useState(false);
  const { country: name } = useParams();

  useEffect(() => {
    setloading(true);
    const fetchdata = async () => {
      const res = await fetch(`http://localhost:5000/mycountry/${name}`);
      const data = await res.json();
      setcountry(data);
      setloading(false);
    };
    fetchdata();
  }, []);
  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <div className="bg-[url('https://i.ibb.co/ZNXqPQs/photo-1534269222346-5a896154c41d.jpg')] h-[350px] w-full flex justify-center items-center relative ">
        <h1 className="text-center text-white font-extrabold text-4xl">
          All Country
        </h1>
        <div className="bg-black w-full absolute top-0 left-0 h-full opacity-20"></div>
      </div>
      <div className=" container mx-auto px-4 py-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 grid-cols-1">
          {country &&
            country.map((tourist, ind) => (
              <CourtryCard country={tourist} key={ind} />
            ))}
        </div>
      </div>
    </>
  );
};

export default AllCourty;
