import { CardGame } from "../index";

import "./style.css";

export function CardFrontBack(icon, altIcon) {
  window.cardFrontBack = {};
  window.cardFrontBack.flipCard = (event) => {
    const clickOrigin = event.target;
    const card = clickOrigin.closest('.card-front-back');
    card.classList.toggle("flip");
  };

  return /*html*/ `
    <article class="card-front-back" onclick="cardFrontBack.flipCard(event)">
      <div class="card-front">
        ${CardGame()}
      </div>
      <div class="card-back">
        ${CardGame(icon, altIcon)}
      </div>
    </article>
  `;
}
