import {ScoreBoard} from '../../objects';
import { CardGame } from "../../components";
import "./style.css";

export function BoardGame(amountCards) {
  const $htmlCardGame = CardGame();
  const $htmlBoardGame = $htmlCardGame.repeat(amountCards || 1);

  return /*html*/`
    ${ScoreBoard()}
    <section class="board-game">
      ${$htmlBoardGame}
    </section>
  `;
}