import * as React from "react";
import Counter from "./components/Counter";
import Greeting from "./components/Greeting";

export default function App() {
  const name = "Andrada";
  const age = 37;
  return (
    <>
      <Counter />
      <br />
      <Greeting nume={name} varsta={age} />
    </>
  );
}
