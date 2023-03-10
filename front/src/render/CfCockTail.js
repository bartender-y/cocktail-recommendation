import React from "react";
import { StarRender } from "./StarRender";
export function CfCocktail(props) {
  const { cfCocktails } = props;
  console.log(cfCocktails);
  return (
    <div>
      <div className="cocktail-box">
        {cfCocktails.map((cock, id) => {
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
    </div>
  );
}
