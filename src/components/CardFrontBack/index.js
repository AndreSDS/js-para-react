import {CardGame} from '../index';

const backImg = "src/images/logo-javascript.png";

import "./style.css";

export function CardFrontBack() {
  return /*html*/`
    <article class="card-front-back">
      ${CardGame()}
      ${CardGame("logo-javascript", "logo do javascript")}
    </article>
  `;
}
