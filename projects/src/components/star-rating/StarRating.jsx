import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./Styles.css";
const StarRating = ({ noOfStars = 10 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleMouseEnter = (index) => {
    setHover(index);
  };
  const handleMouseLeave = () => {
    setHover(rating);
  };
  const handleClick = (index) => {
    setRating(index);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      {[...Array(noOfStars)].map((_, index) => {
        index++;
        return (
          <FaStar
            key={index}
            className={index <= (hover || rating) ? "active" : "inactive"}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave()}
            size={30}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
