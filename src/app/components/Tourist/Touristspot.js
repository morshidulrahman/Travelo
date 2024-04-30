import React, { useEffect, useState } from "react";
import SingleTouristCard from "./SingleTouristCard";
import { Fade } from "react-awesome-reveal";
import Loader from "../loader/Loader";
const Touristspot = () => {
  const [tourist, setTourist] = useState();
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true);
    const fetchdata = async () => {
      const res = await fetch("https://travel-server-umber.vercel.app/travels");
      const data = await res.json();
      setTourist(data);
      setloading(false);
    };
    fetchdata();
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <div className="py-10 container mx-auto px-5">
      <h1 className="text-4xl font-extrabold text-center capitalize dark:text-white">
        Tourist spots
      </h1>
      <div className="pt-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 grid-cols-1">
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

export default Touristspot;
