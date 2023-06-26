import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import { Box } from "@mui/material";
import Dashboard from "./Dashboard";

function App() {
  return (

    <Routes>

      <Route path="/" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />


    </Routes>


  );
}

export default App;
