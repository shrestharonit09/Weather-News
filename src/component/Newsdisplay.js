import React, { useState, useEffect, useContext } from "react";
import { ClipLoader } from "react-spinners";
import Logo from "../Images/News.svg";
import { IoIosMenu } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { globalContext } from "../ContextAPI/NoteState";
import Newdata from "./Newdata";
import Loginmodal from "./Loginmodal";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "./Sidebar";
import Contactme from "./Contactme";

const Newsdisplay = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [country, setCountry] = useState("in");
  const [isLoginModalVisible, setIsLoginModalVisible] = useState(false);
  const [islogin, setLogin] = useState(false); // set login and logout
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [weather, setWeather] = useState([]);
  const [time, setTime] = useState(new Date());

  const [width, setWidth] = useState(window.innerWidth);


  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const {
    catagory,
    handleCatagory,
    image,
    handleImage,
    isHome,
    handlehome,
    headline,
    handleheadline,
  } = useContext(globalContext);

  const weatherdata = async (latitude, longitude) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=85ddfa36b52f28b28ec40b04ceae1b7b`
      );
      const dataAPI = await response.json();
      setWeather(dataAPI);
    } catch (error) {}
  };
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        weatherdata(position.coords.latitude, position.coords.longitude);
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  const datafromapi = async () => {
    setLoading(true);
    try {
      let url = `https://newsapi.org/v2/top-headlines?country=${country}&q=${searchQuery}&apiKey=b1e85d3296134d5e9fb3669422e7a0b6`;
      if (!isHome) {
        url += `&category=${catagory}`;
      }
      const response = await fetch(url);
      const data = await response.json();
      let articles = data.articles;

      setData(articles);
    } catch (error) {
      console.error("Error fetching data: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    datafromapi();
  }, [catagory, country, searchQuery]);

  useEffect(() => {
    getLocation();
    const interval = setInterval(() => new Date(), 1000);
    return () => clearInterval(interval);
  }, []);

  const handleLogout = () => {
    setLogin(false);
    alert("Logout Successfully");
  };

  const handleSuccess = () => {
    setLogin(true);
    setIsLoginModalVisible(false);
    alert("Login Successfully");
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    datafromapi();
  };

  const day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const month = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December",
  };

  return (
    <div className="w-full flex flex-col gap-5 border border-green-800">
      <div className="flex justify-center bg-blue-700 fixed top-0 w-full">
        <div className="flex gap-8 px-4 py-4">
          <div className="w-[90vw] flex justify-between">
            <div className="px-4">
              <img className="h-8 md:h-12 lg:h-20 w-8 md:w-12 lg:w-20" src={Logo} alt="logo" />
            </div>
            {width > 750 ? (
              <div className="flex gap-1 md:gap-8 px-2 md:px-4 py-2 lg:py-4">
                <button
                  className="text-white font-bold hover:text-sky-500  text-sm lg:text-xl"
                  onClick={() => {
                    handleCatagory("");
                    handleImage(
                      "https://t3.ftcdn.net/jpg/00/88/43/58/360_F_88435847_HhglbcoGP5qOX3DfudP3hN5z95eTrHqz.jpg"
                    );
                    handleheadline("Top Five Headline News");
                    handlehome(true);
                    setSearchQuery("");
                  }}
                >
                  Home
                </button>
                <button
                  className="text-white font-bold hover:text-sky-500  text-sm lg:text-xl"
                  onClick={() => {
                    handleCatagory("business");
                    handlehome(false);
                    handleImage(
                      "https://www.svgrepo.com/show/424694/business-factory-illustration.svg"
                    );
                  }}
                >
                  Business
                </button>
                <button
                  className="text-white font-bold hover:text-sky-500  text-sm lg:text-xl"
                  onClick={() => {
                    handleCatagory("sports");
                    handlehome(false);
                    handleImage(
                      "https://www.svgrepo.com/show/407515/sports-medal.svg"
                    );
                  }}
                >
                  Sports
                </button>
                <button
                  className="text-white font-bold hover:text-sky-500  text-sm lg:text-xl"
                  onClick={() => {
                    handleCatagory("entertainment");
                    handlehome(false);
                    handleImage(
                      "https://www.svgrepo.com/show/356812/film-reel.svg"
                    );
                  }}
                >
                  Entertainment
                </button>
                <button
                  className="text-white font-bold hover:text-sky-500 text-sm lg:text-xl"
                  onClick={() => {
                    handleCatagory("general");
                    handlehome(false);
                    handleImage(
                      "https://www.svgrepo.com/show/164921/settings.svg"
                    );
                  }}
                >
                  General
                </button>
                <button
                  className="text-white font-bold hover:text-sky-500 text-sm lg:text-xl"
                  onClick={() => {
                    handleCatagory("health");
                    handlehome(false);
                    handleImage(
                      "https://www.svgrepo.com/show/270145/health-clinic-health-care.svg"
                    );
                  }}
                >
                  Health
                </button>
                <button
                  className="text-white font-bold hover:text-sky-500  text-sm lg:text-xl"
                  onClick={() => {
                    handleCatagory("science");
                    handlehome(false);
                    handleImage(
                      "https://www.svgrepo.com/show/179495/science-science.svg"
                    );
                  }}
                >
                  Science
                </button>
                <button 
                  className="text-white font-bold hover:text-sky-500 text-sm lg:text-xl"
                  onClick={() => {
                    handleCatagory("technology");
                    handlehome(false);
                    handleImage(
                      "https://www.svgrepo.com/show/341462/technology-digital-transformation-machinery-engineering-industry.svg"
                    );
                  }}
                >
                  Technology
                </button>
              </div>
            ) : (
              ""
            )}
            <div className="flex gap-8 px-4 py-4">
              <button>
                <select
                  className="rounded-lg bg-sky-500 text-white text-sm lg:text-lg font-bold"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                >
                  <option value="">Country</option>
                  <option value="in">India</option>
                  <option value="us">USA</option>
                  <option value="nl">Netherland</option>
                </select>
              </button>
              {islogin ? (
                <button onClick={handleLogout}>
                  <h1 className="text-white text-sm rounded-full bg-red-600 p-2 hover:shadow-lg hover:bg-red-800">
                    LogOut
                  </h1>
                </button>
              ) : (
                <button onClick={() => setIsLoginModalVisible(true)}>
                  <CgProfile className="text-white text-xl lg:text-3xl hover:text-sky-500" />
                </button>
              )}
              {width < 750 ? (
                <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                  <IoIosMenu className="text-white text-3xl hover:text-sky-500" />
                </button>
              ) : (
                ""
              )}
              {isSidebarOpen && (
                <Sidebar isOpen={isSidebarOpen} onClose={handleCloseSidebar} />
              )}
            </div>
          </div>
        </div>
      </div>
      <Loginmodal
        isVisible={isLoginModalVisible}
        onClose={() => setIsLoginModalVisible(false)}
        onhandleSuccess={handleSuccess}
      />
      <div className=" mt-24 flex justify-between p-4">
        <div className="flex gap-1">
          <h1 className="text-gray-700 text-xl">{day[time.getDay()]} ,</h1>
          <h1 className="text-gray-700 text-xl">
            {month[time.getMonth() + 1]}
          </h1>
          <h1 className="text-gray-700 text-xl">{time.getDate()} ,</h1>
          <h1 className="text-gray-700 text-xl">{time.getFullYear()}</h1>
        </div>
        <div>
          {isHome ? (
            <div className="flex justify-center">
              <img height={120} width={120} src={image} alt="Image" />
            </div>
          ) : (
            <div className="flex justify-center">
              <img height={80} width={80} src={image} alt="Image" />
            </div>
          )}

          {isHome ? (
            <h1 className="text-3xl text-blue-700 font-bold text-center">
              {headline}
            </h1>
          ) : (
            <h1 className="text-3xl text-blue-700 font-bold text-center">
              {catagory &&
                `${catagory.charAt(0).toUpperCase() + catagory.slice(1)} News`}
            </h1>
          )}
        </div>
        <div>
          {weather.main && (
            <h1 className="text-gray-700 text-xl">
              {weather.main.temp}°C , {weather.name}
            </h1>
          )}
        </div>
      </div>

      <form className="flex justify-center mt-4" onSubmit={handleSearch}>
        <input
          type="text"
          className="border border-gray-500 rounded-lg p-2 w-1/2"
          placeholder="Search for news"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded-lg ml-2 hover:bg-blue-800"
        >
          Search
        </button>
      </form>

      {loading ? (
        <div className="flex justify-center items-center h-full mt-40">
          <ClipLoader color={"#123abc"} loading={loading} size={100} />
        </div>
      ) : (
        <Newdata data={data} loginComment={islogin} />
      )}
      <hr />
      <Contactme loginvayo={islogin} />
    </div>
  );
};

export default Newsdisplay;