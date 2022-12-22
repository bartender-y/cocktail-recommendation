import React from "react";

export function TodayCockTail(props) {
  const { todayCocktail } = props;

  return (
    <div className="today-cocktail">
      <h1>{todayCocktail.name}</h1>
      <span>{todayCocktail.proof}</span>
      <div className="today-cocktail-ingradients">
        {todayCocktail.gradients.map((grad, idx) => {
          return (
            <div className="grad" key={grad + idx}>
              grad
            </div>
          );
        })}
      </div>
      <img
        className="today-cocktail-image"
        src={todayCocktail.image}
        alt="today-cocktail-image"
      />
    </div>
  );
}
