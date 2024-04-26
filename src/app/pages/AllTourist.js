import React, { useEffect, useState } from "react";
import SingleTouristCard from "../components/Tourist/SingleTouristCard";
import { Fade } from "react-awesome-reveal";

const AllTourist = () => {
  const [tourist, setTourist] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      const res = await fetch("./tourist.json");
      const data = await res.json();
      setTourist(data);
    };
    fetchdata();
  }, []);

  return (
    <div className="container mx-auto px-4 rounded-lg py-5">
      <div className="bg-[url('https://i.ibb.co/ZNXqPQs/photo-1534269222346-5a896154c41d.jpg')] h-[300px] w-full flex justify-center items-center relative rounded-lg">
        <h1 className="text-center text-white font-extrabold text-4xl">
          All Tourists spot
        </h1>
        <div className="bg-black w-full absolute top-0 left-0 h-full opacity-20"></div>
      </div>
      <div className="flex justify-center items-center py-14">
        <select
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 "
          name="seasonality"
        >
          <option value="ascending">ascending </option>
          <option value="descending">descending </option>
        </select>
      </div>
      <div className=" container mx-auto px-4">
        <div className="grid grid-cols-3 gap-8">
          {tourist &&
            tourist.slice(0, 6).map((tourist, ind) => (
              <Fade
                delay={ind * 150}
                cascade={false}
                direction="up"
                triggerOnce={true}
                key={ind}
              >
                <SingleTouristCard tourist={tourist} />
              </Fade>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AllTourist;