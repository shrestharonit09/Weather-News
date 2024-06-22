import React from 'react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 mt-10">
      <h1 className="text-4xl font-bold mb-4">About Us</h1>
      <p className="text-lg mb-4">
        Welcome to our comprehensive information platform! Our project is designed to provide you with the latest news from various countries around the world, along with up-to-date weather information for different districts. Whether you are looking to stay informed about global events or check the weather in your local area, our platform has you covered.
      </p>
      <h2 className="text-2xl font-bold mb-2">Key Features</h2>
      <ul className="list-disc list-inside mb-4">
        <li className="mb-2">
          <strong>Global News:</strong> Get the latest news updates from different countries. Our system aggregates news from reliable sources to keep you informed about what’s happening around the world.
        </li>
        <li className="mb-2">
          <strong>Weather Information:</strong> Access current weather conditions, forecasts, and other weather-related data for various districts. Stay prepared with accurate and timely weather updates.
        </li>
        <li className="mb-2">
          <strong>User-Friendly Interface:</strong> Our platform is designed with a user-friendly interface, making it easy for you to navigate and find the information you need quickly.
        </li>
      </ul>
      <p className="text-lg">
        We are committed to providing accurate and up-to-date information to help you stay informed and make better decisions. Thank you for using our platform!
      </p>
    </div>
  );
};

export default About;
