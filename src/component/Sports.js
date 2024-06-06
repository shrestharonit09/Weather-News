import React, { useEffect, useState } from "react";
import Sportscard from "./Sportscard";

const Sports = () => {
  const [sportsdata, setSportsdata] = useState([]);
  const [dropdown, setDropdown] = useState("in");

  const datafromapi = async () => {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=${dropdown}&category=sports&apiKey=0129de2ad9fa4b9aa7d99fc1faef9d5d`
      );
      const data = await response.json();
      setSportsdata(data.articles);
    } catch (error) {}
  };
  useEffect(() => {
    datafromapi();
  }, [dropdown]);
  return (
    <div className="mt-10 flex flex-col gap-5">
      <div className="flex justify-center">
      <div className="bg-gray-200 w-[95vw] flex justify-center rounded-lg p-5">
      <select className="rounded-lg border border-gray-500 bg-gray-300" value={dropdown} onChange={(e) => setDropdown(e.target.value)}>
        <option value="">Select Country</option>
        <option value="in">India</option>
        <option value="us">USA</option>
        <option value="nl">Netherland</option>
       
      </select>
      </div>
      </div>
      <div className="grid grid-cols-2 gap-10">
        {sportsdata.map((values, index) => (
          <Sportscard
            key={index?.source?.id ? index.source.id : ""}
            name={values?.source?.name ? values.source.name : ""}
            author={values?.author ? values.author : "Unknown Author"}
            title={values?.title ? values.title : ""}
            description={values?.description ? values.description : ""}
            url={values?.url ? values.url : ""}
            image={
              values?.urlToImage
                ? values.urlToImage
                : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStE40pWkS0kREns_mESXDh-Wm9uoXUbP0img&s"
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

export default Sports;
