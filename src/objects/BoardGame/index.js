import { CardFrontBack } from "../../components";
import { ScoreBoard } from "../../objects";
import "./style.css";

export function BoardGame(amountCards) {
  const $htmlCardFrontBack = CardFrontBack();
  const $htmlBoardGame = $htmlCardFrontBack.repeat(amountCards || 1);

  return /*html*/`
    <section class="board-game">
      ${$htmlBoardGame}
    </section>
  `;
}