"use client";

import { trpc } from "@/client";
import { useState } from "react";

export function Uppercaser() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const onClick = () => {
    trpc.uppercaseString.query(input).then((result) => {
      console.log(result);
      setOutput(result);
    });
  };

  return (
    <div>
      <input
        onChange={(e) => setInput(e.target.value)}
        className="bg-gray-800"
      ></input>
      <button onClick={onClick}>Click me</button>
      <p>{output}</p>
    </div>
  );
}
