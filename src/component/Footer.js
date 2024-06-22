import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="flex gap-2 md:gap-4 lg:gap-6 w-full h-16 md:h-20 xl:h-24 items-center justify-center bg-gray-200">
        <img
          className="rounded-full shadow-lg h-12 w-12 md:h-16 md:w-16 xl:h-20 xl:w-20"
          src="data:image/png;base64,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"
          alt="image"
        />
        <h1 className="font-semibold">
          Venture Four Technology Pvt Ltd@copyright 2024©
        </h1>
      </div>
    </div>
  );
};

export default Footer;
