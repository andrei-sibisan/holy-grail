import * as React from "react";
export default function Greeting() {
  const [name, setName] = React.useState("");
  return (
    <>
      <input onChange={(text) => setName(text.target.value)} />
      <span>Salut, {name}</span>
    </>
  );
}
