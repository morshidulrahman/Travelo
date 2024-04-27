import React from "react";
import { Bars } from "react-loader-spinner";

const Loader = () => {
  return (
    <div
      className="
    flex items-center justify-center py-20"
    >
      <Bars
        height="80"
        width="80"
        color="#F26f55"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
