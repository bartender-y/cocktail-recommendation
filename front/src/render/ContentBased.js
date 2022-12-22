import React from "react";
import { StarRender } from "./StarRender";

export function ContentBased(props) {
  const { cockTail } = props;
  return (
    <div className="cocktail-box">
      {cockTail.map((cock, id) => {
        const name = cock.name;
        return (
          <div className="cocktail" key={id}>
            <p>{cock.name}</p>
            <img
              className="cocktail-image"
              src={cock.image}
              alt="cocktail_image"
            />
            <StarRender name={name} />
          </div>
        );
      })}
    </div>
  );
}
