import React from "react";

const Hero = () => {
  return (
    <div className=" text-white">
      <div className=" mx-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className=" text-green-600 font-bold p-2">
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className=" md:text-7xl sm:text-6xl font-bold md:py-6">
          Grow with data
        </h1>
        <div>
          <p className=" md:text-5xl sm:text-4xl text-xl font-bold">
            Fast, flexible financing for
          </p>
          <p className=" mt-7">
            Monitor your data analytics to increase revenue for BTB, BTC, & SASS
            platform.
          </p>
          <button className=" bg-green-500 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
            Get Start
          </button>
        </div>
      </div>
    </div>
  );
};
export default Hero;
