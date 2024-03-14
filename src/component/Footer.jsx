import React from "react";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaTelegram,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" max-w-[1240opx] mx-auto py-14 px-4 lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className=" w-full text-3xl font-bold text-green-700">REACT.</h1>
        <p className=" py-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
          maiores, aliquid doloremque et tempore voluptatum minima iusto,
          laboriosam nemo aut aperiam voluptas, repudiandae rerum nobis id sunt
          nulla explicabo maxime. Lorem ipsum dolor sit amet consectetur
        </p>
        <div className=" flex justify-between md:w-[75%] my-6 ">
          <FaInstagram size={30} />
          <FaFacebook size={30} />
          <FaLinkedin size={30} />
          <FaTelegram size={30} />
          <FaGithub size={30} />
        </div>
      </div>
      <div className=" lg:col-span-2 flex justify-between mt-6">
        <div>
          <h6 className=" font-medium text-gray-400">Solutions</h6>
          <ul>
            <li className=" py-2 text-sm">Analytics</li>
            <li className=" py-2 text-sm">Maketing</li>
            <li className=" py-2 text-sm">Commerce</li>
            <li className=" py-2 text-sm">Insights</li>
          </ul>
        </div>

        <div>
          <h6 className=" font-medium text-gray-400">Support</h6>
          <ul>
            <li className=" py-2 text-sm">Pricing</li>
            <li className=" py-2 text-sm">Documentation</li>
            <li className=" py-2 text-sm">Guides</li>
            <li className=" py-2 text-sm">API Status</li>
          </ul>
        </div>

        <div>
          <h6 className=" font-medium text-gray-400">Company</h6>
          <ul>
            <li className=" py-2 text-sm">About</li>
            <li className=" py-2 text-sm">Blog</li>
            <li className=" py-2 text-sm">Job</li>
            <li className=" py-2 text-sm">Press</li>
            <li className=" py-2 text-sm">Career</li>
          </ul>
        </div>

        <div>
          <h6 className=" font-medium text-gray-400">Legel</h6>
          <ul>
            <li className=" py-2 text-sm">Claim</li>
            <li className=" py-2 text-sm">Policy</li>
            <li className=" py-2 text-sm">Terms</li>
          </ul>
        </div>

        <div>
          <h6 className=" font-medium text-gray-400">Solutions</h6>
          <ul>
            <li className=" py-2 text-sm">Analytics</li>
            <li className=" py-2 text-sm">Maketing</li>
            <li className=" py-2 text-sm">Commerce</li>
            <li className=" py-2 text-sm">Insights</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Footer;
