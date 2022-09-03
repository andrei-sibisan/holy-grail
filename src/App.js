import * as React from "react";
import Counter from "./components/Counter";
import { Greeting } from "./components/Greeting";

export default function App() {
  const path = window.location.pathname.split("/")[1];
  return (
    <>
      {path === "counter" && <Counter />}
      {path === "greeting" && <Greeting />}
    </>
  );
}
