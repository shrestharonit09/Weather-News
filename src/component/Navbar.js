import React, {useState,useEffect,useContext } from "react";

import Logo from "../Images/News.svg";
import { NavLink } from "react-router-dom";
import {globalContext } from "../ContextAPI/NoteState";
import Navbarcard from "./Navbarcard";

const Navbar =() => {
  const[data,setData]=useState()
 const{catagory,handleCatagory}=useContext(globalContext);

  const datafromapi = async () => {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=in&category=${catagory}&apiKey=0129de2ad9fa4b9aa7d99fc1faef9d5d`
      );
      const data = await response.json();
     
       setData(data.articles);


     
    } catch (error) {}
  }; 

  useEffect(() => {
   datafromapi();
    
  }, [catagory]);


  return (
    <div className="w-full bg-gray-200 shadow-lg">

      <div className="flex justify-center">
        <div className="w-[90vw] flex justify-between px-4 py-5 ">
          <div>
            <img className="h-16 w-16" src={Logo} alt="logo" />
          </div>
          <div>
            <div className="flex gap-5 py-4">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-400"
                    : "text-md text-gray-500 font-semibold hover:bg-gray-300 rounded-lg"
                }
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-400"
                    : "text-md text-gray-500 font-semibold hover:bg-gray-300 rounded-lg"
                }
                to="/weather"
              >
                Weather
              </NavLink>
            </div>
           
              <button onClick={()=>handleCatagory("business")}>Business</button>
              <button onClick={()=>handleCatagory("sports")}>Sports</button>
          
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-10">
        {data?.map((values, index) => (
          <Navbarcard
            key={index?.source?.id ? index.source.id : ""}
            name={values?.source?.name ? values.source.name : ""}
            author={values?.author ? values.author : "Unknown Author"}
            title={values?.title ? values.title : ""}
            description={values?.description ? values.description : ""}
            url={values?.url ? values.url : ""}
            image={
              values?.urlToImage
                ? values.urlToImage
                : "https://online.hbs.edu/Style%20Library/api/resize.aspx?imgpath=/PublishingImages/overhead-view-of-business-strategy-meeting.jpg&w=1200&h=630"
            }
            publishdate={
              values?.publishedAt ? values.publishedAt : "Date not available"
            }
            content={values?.content ? values.content : "Not availabe"}
          />
        ))}
      </div>
    </div>
  );
};

export default Navbar;
