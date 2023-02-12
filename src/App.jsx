import "./App.css";

import Homepage from "./components/Homepage";

import { Route, Routes } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Zine from "./components/Zine";
import MeetingTimes from "./components/MeetingTimes";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/zine" element={<Zine />} />
          <Route path="/events" element={<MeetingTimes />} />

          <Route path="*" element={<Homepage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
