import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles.css";
import Home from "./views/Home";
import Articles from "./views/Articles";

export default function App() {
  const categories = [
    { id: 1, name: "Books" },
    { id: 2, name: "Films" },
    { id: 3, name: "Games" },
  ];
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home allCategories={categories}/>} />
        <Route
          path="/:categoryId"
          element={<Articles allCategories={categories} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
