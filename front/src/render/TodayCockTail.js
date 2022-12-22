import React from "react";
import { StarRender } from "./StarRender";
export function TodayCockTail(props) {
  const todayCocktail = props;
  return todayCocktail.name !== "" ? (
    <div>
      <div className="today-cocktail">
        <h1>{todayCocktail.todayCocktail.name}</h1>
        <span>{todayCocktail.todayCocktail.proof}</span>
        <div className="today-cocktail-ingradients">
          {todayCocktail.todayCocktail.gradients.map((grad, idx) => {
            return (
              <div className="grad" key={grad + idx}>
                {grad}
              </div>
            );
          })}
        </div>
        <img
          className="today-cocktail-image"
          src={todayCocktail.todayCocktail.image}
          alt="today-cocktail-image"
        />

        <div>
          <StarRender name={todayCocktail.todayCocktail.name} />
        </div>
      </div>
    </div>
  ) : null;
}
