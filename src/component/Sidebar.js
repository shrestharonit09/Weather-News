import React, { useContext } from "react";
import { globalContext } from "../ContextAPI/NoteState";
import { RxCross1 } from "react-icons/rx";
import "./Sidebar.css";
import { motion } from "framer-motion";

const Sidebar = ({ isOpen, onClose }) => {
  const { handleCatagory, handleImage, handlehome, handleheadline } =
    useContext(globalContext);

  const handleCategoryClick = (category) => {
    handleCatagory(category);
  };
  const handleImageClick = (image) => {
    handleImage(image);
  };

  return (
    <div
      className={`sidebar-container bg-blue-700 p-3 ${isOpen ? "open" : ""}`}
    >
      <motion.aside
        initial={{ width: 0 }}
        animate={{ width: 200 }}
      ></motion.aside>
      <div className="close-icon flex justify-end" onClick={onClose}>
        <button>
          <RxCross1 className="font-bold text-white hover:bg-red-500" />
        </button>
      </div>
      <ul>
        <li
          onClick={() => {
            handleCatagory("");
            handleImage(
              "https://t3.ftcdn.net/jpg/00/88/43/58/360_F_88435847_HhglbcoGP5qOX3DfudP3hN5z95eTrHqz.jpg"
            );
            handleheadline("Top Five Headline News");
            handlehome(true);
          }}
        >
          <div className="flex gap-5">
            <img
              height={30}
              width={30}
              src="https://www.svgrepo.com/show/501871/home-house.svg"
              alt="home"
            ></img>
            <h1 className="text-white font-bold text-lg hover:text-sky-500">
              Home
            </h1>
          </div>
        </li>
        <li
          onClick={() => {
            handlehome(false);
            handleCategoryClick("business");
            handleImageClick(
              "https://www.svgrepo.com/show/424694/business-factory-illustration.svg"
            );
          }}
        >
          <div className="flex gap-5">
            <img
              height={30}
              width={30}
              src="https://www.svgrepo.com/show/424694/business-factory-illustration.svg"
              alt="business"
            ></img>
            <h1 className="text-white font-bold text-lg hover:text-sky-500">
              {" "}
              Business
            </h1>
          </div>
        </li>
        <li
          onClick={() => {
            handlehome(false);
            handleCategoryClick("sports");
            handleImageClick(
              "https://www.svgrepo.com/show/407515/sports-medal.svg"
            );
          }}
        >
          <div className="flex gap-5">
            <img
              height={30}
              width={30}
              src="https://www.svgrepo.com/show/407515/sports-medal.svg"
              alt="sports"
            ></img>
            <h1 className="text-white font-bold text-lg hover:text-sky-500">
              Sports
            </h1>
          </div>
        </li>
        <li
          onClick={() => {
            handlehome(false);
            handleCategoryClick("entertainment");
            handleImageClick(
              "https://www.svgrepo.com/show/356812/film-reel.svg"
            );
          }}
        >
          <div className="flex gap-5">
            <img
              height={30}
              width={30}
              src="https://www.svgrepo.com/show/356812/film-reel.svg"
              alt="entertainment"
            ></img>
            <h1 className="text-white font-bold text-lg hover:text-sky-500">
              Entertainment
            </h1>
          </div>
        </li>
        <li
          onClick={() => {
            handlehome(false);
            handleCategoryClick("health");
            handleImageClick(
              "https://www.svgrepo.com/show/270145/health-clinic-health-care.svg"
            );
          }}
        >
          <div className="flex gap-5">
            <img
              height={30}
              width={30}
              src="https://www.svgrepo.com/show/270145/health-clinic-health-care.svg"
              alt="health"
            ></img>
            <h1 className="text-white font-bold text-lg hover:text-sky-500">
              Health
            </h1>
          </div>
        </li>
        <li
          onClick={() => {
            handlehome(false);
            handleCategoryClick("science");
            handleImageClick(
              "https://www.svgrepo.com/show/179495/science-science.svg"
            );
          }}
        >
          <div className="flex gap-5">
            <img
              height={30}
              width={30}
              src="https://www.svgrepo.com/show/179495/science-science.svg"
              alt="science"
            ></img>
            <h1 className="text-white font-bold text-lg hover:text-sky-500">
              Science
            </h1>
          </div>
        </li>
        <li
          onClick={() => {
            handlehome(false);
            handleCategoryClick("technology");
            handleImageClick(
              "https://www.svgrepo.com/show/341462/technology-digital-transformation-machinery-engineering-industry.svg"
            );
          }}
        >
          <div className="flex gap-5">
            <img
              height={30}
              width={30}
              src="https://www.svgrepo.com/show/341462/technology-digital-transformation-machinery-engineering-industry.svg"
              alt="technology"
            ></img>
            <h1 className="text-white font-bold text-lg hover:text-sky-500">
              Technology
            </h1>
          </div>
        </li>
        <li
          onClick={() => {
            handlehome(false);
            handleCategoryClick("general");
            handleImageClick(
              "https://www.svgrepo.com/show/164921/settings.svg"
            );
          }}
        >
          <div className="flex gap-5">
            <img
              height={30}
              width={30}
              src="https://www.svgrepo.com/show/164921/settings.svg"
              alt="general"
            ></img>
            <h1 className="text-white font-bold text-lg hover:text-sky-500">
              General
            </h1>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
