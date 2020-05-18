import React, { useState } from "react";
import "./styles.css";

const useInput = intitalValue => {
  const [value, setValue] = useState(intitalValue, 1);
  const onChange = event => {
    console.log(event.target);
  };
  return { value, onChange };
};

export default function App() {
  const name = useInput("Mr.", 2);
  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholde="Name" value={name.value} onChange={name.onChange} />
    </div>
  );
}
