import React from "react";
import styled from "styled-components";
import fullStar from "../assets/full_star.png";
import emptyStar from "../assets/empty_star.png";

const Star = styled.img`
  width: 1.75rem;
  height: 1.75rem;
  cursor: pointer;
`;

const StarRatingDisplay = ({ rating }) => {
  return (
    <div>
      {[1, 2, 3, 4, 5].map((el) => (
        <Star
          key={el}
          src={el <= rating ? fullStar : emptyStar}
          alt={`${el} star`}
        />
      ))}
    </div>
  );
};

export default StarRatingDisplay;
