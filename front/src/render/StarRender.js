import React, { useEffect, useState } from "react";
import { APIStarHandler } from "../api/APIStarHandler";
import { AiFillStar,AiOutlineStar } from "react-icons/ai";
import "../css/star.css";
function Star(props) {
  const {star,name,setStar }= props;
  let container = []

  for (let i = 1; i <= 5; i++) {
    container.push(
      <button
      className="star-btn"
        key={name + i}
        onClick={(e) => {
          setStar(i)
          APIStarHandler(i, name, e);
        }}
      >
        {(i<=star)  ? <AiFillStar className="star-icon" />: <AiOutlineStar className="star-icon"/>}
        
      </button>
    );
  }
  return container;
}

export function StarRender(props) {
  const { name } = props;
  const [star, setStar] = useState([]);

  useEffect(() => {
    setStar(0)
  }, [name]);

  return (
    <div className="star-container">
      <Star name={name}
      star={star}
      setStar={setStar}
      />
    </div>
  );
}
