import React from "react";
import { Helmet } from "react-helmet-async";
const Helmets = ({ text }) => {
  return (
    <>
      {" "}
      <Helmet>
        <meta charSet="utf-8" />
        <title>Travelo {text}</title>
      </Helmet>
    </>
  );
};

export default Helmets;
