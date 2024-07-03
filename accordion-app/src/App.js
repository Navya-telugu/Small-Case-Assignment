import React, { useState } from "react";
import ButtonContainer from "./Button/ButtonContainer";
import OptionItem from "./OptionItem/OptionItem";
import "./App.css";

const App = () => {
  const options = [
    { title: "Option 1", content: "I am Option 1" },
    { title: "Option 2", content: "I am Option 2" },
    { title: "Option 3", content: "I am Option 3" },
  ];

  const [openIndices, setOpenIndices] = useState(
    options.map((_, index) => index)
  );
  const [mode, setMode] = useState("allOpen");

  const handleToggle = (index) => {
    if (mode === "allOpen") return;

    if (mode === "oneOpen") {
      setOpenIndices((prev) => (prev.includes(index) ? [] : [index]));
    } else if (mode === "multipleOpen") {
      setOpenIndices((prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index]
      );
    }
  };

  const handleAllOpen = () => {
    setOpenIndices(options.map((_, index) => index));
    setMode("allOpen");
  };

  const handleOneOpen = () => {
    setOpenIndices([]);
    setMode("oneOpen");
  };

  const handleMultipleOpen = () => {
    setOpenIndices([]);
    setMode("multipleOpen");
  };

  return (
    <div className="AppMain">
      <ButtonContainer
        handleAllOpen={handleAllOpen}
        handleOneOpen={handleOneOpen}
        handleMultipleOpen={handleMultipleOpen}
        mode={mode}
      />
      {options.map((option, index) => (
        <OptionItem
          key={index}
          option={option}
          index={index}
          handleToggle={handleToggle}
          isOpen={openIndices.includes(index)}
        />
      ))}
    </div>
  );
};

export default App;
