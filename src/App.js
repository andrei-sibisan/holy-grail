import * as React from "react";

export default function App() {
  const [count, setCount] = React.useState(0);
  // console.log(setCount);
  return (
    <>
      <button onClick={() => setCount(count + 1)}>+</button>
      {count}
      {/* <HelloWorld />
      <Counter /> */}
    </>
  );
}
// function HelloWorld() {
//   return "Hello World!!";
// }
// function Counter() {
//   return "counter";
// }
