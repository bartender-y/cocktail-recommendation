import React from "react";
import { StarRender } from "./StarRender";
import "../css/App.css";
import 'bootstrap/dist/css/bootstrap.css';
// export function ContentBased(props) {
//   const { cockTail } = props;
//   return (
//     <div className="cocktail-box">
//       {cockTail.map((cock, id) => {
//         const name = cock.name;
//         return (
//           <div className="cocktail" key={id}>
//             <p>{cock.name}</p>
//             <img
//               className="cocktail-image"
//               src={cock.image}
//               alt="cocktail_image"
//             />
//             <StarRender name={name} />
//           </div>
//         );
//       })}
//     </div>
//   );
// }


export function ContentBased(props) {
  const { cockTail } = props;
  return (
    <div className="cocktail-box">
      <div className="container">
        <div className="grid">
          {cockTail.map((cock, id) => {
            const name = cock.name;
            return (
                <div className="cocktail" key={id}>
                  <article>
                    <img
                        className="cocktail-image"
                        src={cock.image}
                        alt="cocktail_image"
                    />
                    <div className="text">
                      <h4>{cock.name}</h4>
                      <p>{cock.proof}</p>
                      <StarRender name={name} />
                    </div>
                  </article>
                </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}