import React from "react";
import "./OptionItem.css";

const OptionItem = ({ option, index, handleToggle, isOpen }) => {
  return (
    <div className="mappedDiv">
      <div className="Item" onClick={() => handleToggle(index)}>
        {option.title}
        <span className="arrow">{isOpen ? "▼" : "►"}</span>
      </div>
      <div className={`ItemOption ${isOpen ? "open" : ""}`}>
        {option.content}
      </div>
    </div>
  );
};

export default OptionItem;
