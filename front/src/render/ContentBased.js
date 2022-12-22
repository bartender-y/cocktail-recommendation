import React from "react";

export function ContentBased(props) {
  const { cockTail } = props;
  return (
    <div className="cocktail-box">
      {cockTail.map((cock, id) => {
        return (
          <div className="cocktail" key={id}>
            <p>{cock.name}</p>
            <img
              className="cocktail-image"
              src={cock.imageUrl}
              alt="cocktail_image"
            />
            <div>star</div>
          </div>
        );
      })}
    </div>
  );
}
