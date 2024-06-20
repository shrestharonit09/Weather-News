// Newsdisplaycard.jsx
import React from "react";
import CommentSection from "./CommentSection";

const Newsdisplaycard = (props) => {
  return (
    <div className="flex flex-col border rounded-lg bg-gray-100 shadow-md w-full">
      <img className="h-60 w-full object-cover rounded-t-lg" src={props.image} alt="News" />
      <div className="flex flex-col gap-4 p-6 flex-grow">
        <h1 className="text-2xl font-bold mb-2">{props.title}</h1>
        <div className="flex flex-col gap-2">
          <div className="flex">
            <h2 className="font-bold">Description:&nbsp;</h2>
            <p>{props.description}</p>
          </div>
          <div className="flex">
            <h2 className="font-bold">Published Date:&nbsp;</h2>
            <p>{props.publishdate.slice(0, 10)}</p>
          </div>
          <div className="flex">
            <h2 className="font-bold">Content:&nbsp;</h2>
            <p>{props.content}</p>
          </div>
          <div className="flex">
            <h2 className="font-bold">Author:&nbsp;</h2>
            <p>{props.author}</p>
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



