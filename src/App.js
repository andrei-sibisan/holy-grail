import * as React from "react";
import "./styles.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

export default function App() {
  return (
    <div className="grid-container">
      <Footer />
      <Header />
      <Main />
    </div>
  );
}
