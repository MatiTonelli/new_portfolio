import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import NavBar from "./Components/NavBar/NavBar.jsx";
import { Toaster, toast } from 'sonner'


function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Toaster closeButton position="bottom-center" />
      <Routes>
        
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
