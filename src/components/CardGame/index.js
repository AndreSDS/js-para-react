const frontImg = "src/images/alura-pixel.png";

import "./styles.css";

//get article with id=card-game
const cardGame = document.querySelector("article.card-game");

export function CardGame(icon = "alura-pixel", alt = "logo da alura") {
  return /*html*/ `
    <article class="card-game">
      <img src="src/images/${icon}.png" alt="${alt}">
    </article>
  `;
}
