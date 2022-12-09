import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const click = () => {
    setCount("Sander");
  };

  return (
    <>
      <h1 className="text-center">{count}</h1>
      <h2 style={{ textAlign: "center" }} onClick={click}>
        Add
      </h2>
    </>
  );
}
