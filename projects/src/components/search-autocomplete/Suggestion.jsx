import React from "react";

const Suggestion = ({ data }) => {
  return (
    <ul>
      {data && data.length
        ? data.map((item, index) => <li key={index}>{item}</li>)
        : null}
    </ul>
  );
};

export default Suggestion;
