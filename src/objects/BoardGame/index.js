import { CardFrontBack } from "../../components";
import { cards } from "./data";
import "./style.css";

export function BoardGame(amountCards) {
  // const $htmlBoardGame = $htmlCardFrontBack.repeat(amountCards || 1);
  const htmlCardsList = cards.map((card) =>
    CardFrontBack(card.icon, card.altIcon)
  );
  const $htmlCards = htmlCardsList.join("");

  return /*html*/ `
    <section class="board-game">
      ${$htmlCards}
    </section>
  `;
}
