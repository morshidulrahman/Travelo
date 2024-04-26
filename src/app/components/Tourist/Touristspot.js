import React, { useEffect, useState } from "react";
import SingleTouristCard from "./SingleTouristCard";
import { Fade } from "react-awesome-reveal";
const Touristspot = () => {
  const [tourist, setTourist] = useState();
  useEffect(() => {
    const fetchdata = async () => {
      const res = await fetch("./tourist.json");
      const data = await res.json();
      setTourist(data);
      console.log(data);
    };
    fetchdata();
  }, []);

  return (
    <div className="py-10 container mx-auto px-4">
      <h1 className="text-4xl font-extrabold text-center capitalize dark:text-white">
        Tourist spots
      </h1>
      <div className="pt-16">
        <div className="grid grid-cols-3 gap-6">
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

export default Touristspot;
