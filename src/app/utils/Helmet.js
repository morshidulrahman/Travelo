import React from "react";
import { Helmet } from "react-helmet-async";
const Helmets = ({ text }) => {
  return (
    <>
      {" "}
      <Helmet>
        <meta charSet="utf-8" />
        <title>Travelo {text}</title>
        <link rel="canonical" href="https://i.ibb.co/3cXqr9P/profile1.png" />
      </Helmet>
    </>
  );
};

export default Helmets;
