import React, { useState } from "react";
import { starHandler } from "../api/starHandler";
import { AiFillStar,AiOutlineStar } from "react-icons/ai";
function Star(props) {
  const {star,name,setStar }= props;
  let container = []

  for (let i = 1; i <= 5; i++) {
    container.push(
      <button
        key={name + i}
        onClick={(e) => {
          setStar(i)
          starHandler(i, name, e);
        }}
      >
        {(i<=star)? <AiFillStar />: <AiOutlineStar />}
        
      </button>
    );
  }
  return container;
}

export function StarRender(props) {
  const { name } = props;
  const [star, setStar] = useState([]);
  return (
    <div className="star-container">
      <Star name={name}
      star={star}
      setStar={setStar}
      />
    </div>
  );
}
