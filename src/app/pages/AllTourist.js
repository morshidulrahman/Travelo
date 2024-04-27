import React, { useEffect, useState } from "react";
import SingleTouristCard from "../components/Tourist/SingleTouristCard";
import { Fade } from "react-awesome-reveal";
import Loader from "../components/loader/Loader";

const AllTourist = () => {
  const [tourist, setTourist] = useState([]);
  const [value, setvalue] = useState("ascending");
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);
    const fetchdata = async () => {
      const res = await fetch("http://localhost:5000/travels");
      const data = await res.json();
      setTourist(data);
      setloading(false);
    };
    fetchdata();
  }, []);
  //  filtering data
  useEffect(() => {
    if (value === "ascending") {
      setTourist(tourist.sort((a, b) => a.average_cost - b.average_cost));
    } else if (value === "descending") {
      setTourist(tourist.sort((a, b) => b.average_cost - a.average_cost));
    }
  }, [value, tourist]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="">
      <div className="bg-[url('https://i.ibb.co/ZNXqPQs/photo-1534269222346-5a896154c41d.jpg')] h-[350px] w-full flex justify-center items-center relative ">
        <h1 className="text-center text-white font-extrabold text-4xl">
          All Tourists spot
        </h1>
        <div className="bg-black w-full absolute top-0 left-0 h-full opacity-20"></div>
      </div>
      <div className="flex justify-center items-center py-14">
        <select
          className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 text-base font-semibold"
          onChange={(e) => setvalue(e.target.value)}
        >
          <option value="ascending">ascending </option>
          <option value="descending">descending </option>
        </select>
      </div>
      <div className=" container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 grid-cols-1">
          {tourist &&
            tourist.map((tourist, ind) => (
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
