import React, { useState, useEffect } from "react";
export function Greeting() {
  const [name, setName] = useState("");
  return (
    <>
      <input onChange={(text) => setName(text.target.value)} />
      {Boolean(name.length) && <span>Salut, {name}</span>}
    </>
  );
}
