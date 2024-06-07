import React from "react";

const Navbarcard = (props) => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-5 border rounded-lg bg-gray-300 w-[45vw]">
        <div className="flex flex-col gap-2">
          <img
            className="h-60 w-100 rounded-t-lg"
            src={props.image}
            alt="picture"
          />
          <div className="p-4">
            <h1 className="text-xl font-bold">{props.title}</h1>
            <div className="flex gap-1">
              <h1 className="font-bold">Description:</h1>
              {props.description}
            </div>
            <div className="flex gap-1">
              <h1 className="font-bold">Published data:</h1>{" "}
              {props.publishdate.slice(0, 10)}
            </div>
            <div className="flex gap-1">
              <h1 className="font-bold">Content:</h1>
              {props.content}
            </div>

            <div className="flex gap-1">
              <h1 className="font-bold">Author:</h1>
              {props.author}
            </div>

            <a href={props.url}><button className="border rounded-lg bg-blue-500 shadow-lg p-2">Read More</button></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbarcard;
