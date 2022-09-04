import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Home from "./views/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
