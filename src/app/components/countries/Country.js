import React, { useEffect, useState } from "react";
import SingleCountryCard from "./SingleCountryCard";
import { Fade } from "react-awesome-reveal";
import Loader from "../loader/Loader";

const Country = () => {
  const [country, setcountry] = useState([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);
    const fetchdata = async () => {
      const res = await fetch(`http://localhost:5000/mycountry`);
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
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-extrabold text-center capitalize dark:text-white pb-16">
        Countries
      </h1>
      <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-5">
        {country &&
          country.slice(0, 6).map((country, ind) => (
            <Fade
              delay={ind * 150}
              cascade={false}
              direction="up"
              triggerOnce={true}
              key={ind}
            >
              <SingleCountryCard country={country} />
            </Fade>
          ))}
      </div>
    </div>
  );
};

export default Country;
