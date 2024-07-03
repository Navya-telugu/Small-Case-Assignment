import React from "react";
import "./ButtonContainer.css";

const ButtonContainer = ({ handleAllOpen, handleOneOpen, handleMultipleOpen, mode }) => {
  return (
    <div className="ButtonContainer">
      <h1 className="heading">Small Case Assignment</h1>
      <button
        onClick={handleAllOpen}
        className={mode === "allOpen" ? "active" : ""}
      >
        All Open / None Closable
      </button>
      <button
        onClick={handleOneOpen}
        className={mode === "oneOpen" ? "active" : ""}
      >
        Only One Open at a Time
      </button>
      <button
        onClick={handleMultipleOpen}
        className={mode === "multipleOpen" ? "active" : ""}
      >
        Multiple Open
      </button>
    </div>
  );
};

export default ButtonContainer;
