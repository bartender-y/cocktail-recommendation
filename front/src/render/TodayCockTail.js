import React from "react";
import { StarRender } from "./StarRender";
import "../css/App.css";
// export function TodayCockTail(props) {
//   const todayCocktail = props;
//   return todayCocktail.name !== "" ? (
//     <div>
//       <div className="today-cocktail">
//         <h1>{todayCocktail.todayCocktail.name}</h1>
//         <span>{todayCocktail.todayCocktail.proof}</span>
//         <div className="today-cocktail-ingradients">
//           {todayCocktail.todayCocktail.gradients.map((grad, idx) => {
//             return (
//               <div className="grad" key={grad + idx}>
//                 {grad}
//               </div>
//             );
//           })}
//         </div>
//         <img
//           className="today-cocktail-image"
//           src={todayCocktail.todayCocktail.image}
//           alt="today-cocktail-image"
//         />

//         <div>
//           <StarRender name={todayCocktail.todayCocktail.name} />
//         </div>
//       </div>
//     </div>
//   ) : null;
// }

export function TodayCockTail(props) {
  const todayCocktail = props;
  return todayCocktail.name !== "" ? (
    <div>
      <div className="today-cocktail card">
        <div className="card_left">
          <img
            className="today-cocktail-image"
            src={todayCocktail.todayCocktail.image}
            alt="today-cocktail-image"
          />
        </div>

        <div className="card_right">
          <h1>{todayCocktail.todayCocktail.name}</h1>
          <div className="card_right__details">
            <ul>
              <li>Proof : {todayCocktail.todayCocktail.proof}</li>
              {/* 공간 심심해서 베이스 추가 했슴다 (빼도됨) */}
              {/* <li>베이스: Rum</li> */}
            </ul>
          </div>
          <div className="today-cocktail-ingradients card_right__review">
            <p>Gradients</p>
             {todayCocktail.todayCocktail.gradients.map((grad, idx) => {
              return (
                <div className="grad" key={grad + idx}>
                  <p> {idx+1} : {grad}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <StarRender name={todayCocktail.todayCocktail.name} />
        </div>
      </div>
    </div>
  ) : null;
}
