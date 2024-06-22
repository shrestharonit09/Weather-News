import React from "react";
import { ToastContainer } from "react-toastify";
import Newsdisplay from "./component/Newsdisplay";
import { NoteState } from "./ContextAPI/NoteState";
import Header from "./component/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./component/Contact";
import WeatherForecast from "./component/Weather/WeatherForecast";
import About from "./component/About";

const App = () => {
  return (
    <div>
      <NoteState>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Newsdisplay />} />
            <Route path="/weather" element={<WeatherForecast />} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/about" element={<About/>} />
            <Route path="*" element={<p>page not found</p>} />
          </Routes>
        </BrowserRouter>
      </NoteState>
      <ToastContainer />
    </div>
  );
};

export default App;
