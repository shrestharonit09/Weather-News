import React from "react";

const Technologycard = (props) => {
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
          {props.url.length > 160 ? (
            "https://www.moneycontrol.com/elections/lok-sabha-election/mc-election-index-roars-after-exit-polls-watch-out-for-its-performance-on-counting-day-article-12739684.html"
          ) : (
            <div className="flex">
              <h1 className="font-bold">URL:</h1>
              <h1>
                <a href={props.url}>{props.url}</a>
              </h1>
            </div>
          )}
   
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

        </div>
        </div>
      </div>
    </div>
  );
};

export default Technologycard;
