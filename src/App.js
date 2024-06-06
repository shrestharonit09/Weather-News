import React from "react";
import Navbar from "./component/Navbar";
import Weatherpart from "./component/Weatherpart";
import Home from "./component/Home";
import Technology from "./component/Technology"
import Business from "./component/Business"
import General from "./component/General"
import Health from "./component/Health"
import Science from "./component/Science"
import Sports from "./component/Sports"
import Entertainment from "./component/Entertainment"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/Weather" element={<Weatherpart/>}></Route>
          <Route path="/Technology" element={<Technology/>}></Route>
          <Route path="/Business" element={<Business/>}></Route>
          <Route path="/General" element={<General/>}></Route>
          <Route path="/Health" element={<Health/>}></Route>
          <Route path="/Science" element={<Science/>}></Route>
          <Route path="/Sports" element={<Sports/>}></Route>
          <Route path="/Entertainment" element={<Entertainment/>}></Route>
        </Routes>
      </Router>
    
    </div>
  );
};

export default App;
