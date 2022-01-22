

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./DisplayData/Home"
import UserDetails from './DisplayData/UserDetails'

function App() {
  return (

    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/UserDetails/:slug" element={<UserDetails />} />
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App
