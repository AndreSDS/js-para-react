import {CardGame} from '../index';

const frontImg = "src/images/alura-pixel.png";
const backImg = "src/images/logo-javascript.png";

import "./style.css";

export function CardFrontBack() {
  return /*html*/`
    <article class="card-front-back">
      ${CardGame(frontImg, backImg)}
      ${CardGame(frontImg, backImg)}
    </article>
  `;
}
