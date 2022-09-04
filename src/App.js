import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

export default function App() {
  const homeView = (
    <div className="grid-container">
      <Header />
      <Main />
      <Footer />
    </div>
  );
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={homeView} />
        <Route path="contact" element={homeView} />
      </Routes>
    </BrowserRouter>
  );
}
