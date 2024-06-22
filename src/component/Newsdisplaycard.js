// Newsdisplaycard.jsx
import React from "react";
import CommentSection from "./CommentSection";

const Newsdisplaycard = (props) => {
  return (
    <div className="flex flex-col border rounded-lg bg-gray-100 shadow-md w-full">
      <img className="h-60 w-full object-cover rounded-t-lg" src={props.image} alt="News" />
      <div className="flex flex-col gap-4 p-6 flex-grow">
        <h1 className="text-sm sm:text-base md:text-xl font-bold mb-2">{props.title}</h1>
        <div className="flex flex-col gap-2">
          <div className="flex">
            <h2 className="text-sm sm:text-base md:text-xl font-bold">Description:&nbsp;</h2>
            <p  className="lg:py-1 sm:text-base md:text-md">{props.description}</p>
          </div>
          <div className="flex">
            <h2 className="text-sm sm:text-base md:text-xl font-bold">Published Date:&nbsp;</h2>
            <p  className="lg:py-1 sm:text-base md:text-md">{props.publishdate.slice(0, 10)}</p>
          </div>
          <div className="flex">
            <h2 className="text-sm sm:text-base md:text-xl font-bold">Content:&nbsp;</h2>
            <p  className="lg:py-1 sm:text-base md:text-md">{props.content}</p>
          </div>
          <div className="flex">
            <h2 className="text-base md:text-xl font-bold">Author:&nbsp;</h2>
            <p className="lg:py-1 sm:text-base md:text-md">{props.author}</p>
          </div>
        </div>
      </div>
      <div className="p-4 border-t">
        <a href={props.url} rel="noopener noreferrer">
          <button className="w-full border rounded-lg bg-blue-500 text-white shadow-lg p-2 hover:bg-blue-600">
            Read More
          </button>
        </a>
      </div>

      {/* Comments Section */}
      <CommentSection publishDate={props.publishdate} logincomments={props.logincomment} />
    </div>
  );
};

export default Newsdisplaycard;



