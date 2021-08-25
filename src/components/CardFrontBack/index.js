import { CardGame } from "../index";

import "./style.css";

export function CardFrontBack() {
  //function to add class flip to card
  const flipCard = () => {
    console.log("flip");
    // const card = document.querySelector(".card-front-back");
    // card.classList.toggle("flip");
  };

  return /*html*/ `
    <article class="card-front-back" onclick="${flipCard()}">
      <div class="card-front">
        ${CardGame()}
      </div>
      <div class="card-back">
        ${CardGame("logo-javascript", "logo do javascript")}
      </div>
    </article>
  `;
}
