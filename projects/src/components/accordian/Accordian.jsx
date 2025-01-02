import React, { useState } from "react";
import data from "./data";
import  "./styles.css";

const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleSingleSelection = (id) => {
    setSelected(selected === id ? null : id);
  };

  const handleMultiSelection = (id) => {
    setMultiple((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="wrapper">
      <button className="toggle-button" onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        Toggle Multi Selection
      </button>
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => {
            const isOpen = enableMultiSelection
              ? multiple.includes(dataItem.id)
              : selected === dataItem.id;

            return (
              <div className="item" key={dataItem.id}>
                <div
                  className="title"
                  onClick={() =>
                    enableMultiSelection
                      ? handleMultiSelection(dataItem.id)
                      : handleSingleSelection(dataItem.id)
                  }
                >
                  <h2>{dataItem.question}</h2>
                  <span>{isOpen ? "-" : "+"}</span>
                </div>
                {isOpen && <div className="content">{dataItem.answer}</div>}
              </div>
            );
          })
        ) : (
          <div>No data found!</div>
        )}
      </div>
    </div>
  );
};

export default Accordian;
