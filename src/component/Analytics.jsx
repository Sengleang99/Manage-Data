import React from "react";
import img from "../assets/data-removebg-preview.png";

const Analytics = () => {
  return (
    <div className=" w-full bg-white py-16 px-4">
      <div className=" max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className=" w-[500px] mx-auto my-4" src={img} alt="" />
        <div className=" flex flex-col justify-center items-center">
          <p className=" text-green-500 font-bold">DATA ANALYTICS DASHBOARD</p>
          <h1 className=" md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Data Analytics Centrally
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            tenetur ab eos repellat animi neque vero error placeat rerum omnis,
            itaque harum officiis ducimus nostrum odio eius doloribus at nisi!
          </p>
          <button className=" bg-green-500 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
            Get Start
          </button>
        </div>
      </div>
    </div>
  );
};
export default Analytics;
