import React, { useEffect, useState } from "react";
import SingleTouristCard from "../components/Tourist/SingleTouristCard";
import { Fade } from "react-awesome-reveal";
import { useParams } from "react-router-dom";

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
    </>
  );
};

export default AllCourty;
