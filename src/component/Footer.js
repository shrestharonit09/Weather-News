import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-200">
      <div className="flex flex-col items-center md:flex-row md:justify-center md:gap-4 lg:gap-6 w-full h-auto md:h-20 xl:h-24">
        <img
          className="rounded-full shadow-lg h-12 w-12 md:h-16 md:w-16 xl:h-20 xl:w-20"
          src="https://i0.wp.com/venture4tech.com/w3/wp-content/uploads/hori-logo.jpg?resize=1268%2C577&ssl=1"
          alt="Company Logo"
        />
        <h1 className="font-semibold text-center mt-2 md:mt-0 lg:text-xl">
          © 2024 Venture Four Technology Pvt Ltd. All rights reserved.
        </h1>
      </div>
    </div>
  );
};

export default Footer;

