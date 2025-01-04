import React from "react";
import { Pipeline } from "./pages/Pipeline";
import { HomePage } from "./pages/Home";

import { Routes, Route } from "react-router-dom";
import axios from "axios";

const App = () => {
  axios.defaults.baseURL = "http://localhost:8000";
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/pipeline" element={<Pipeline />} />
    </Routes>
  );
};

export default App;
