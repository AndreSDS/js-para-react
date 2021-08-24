import { CardGame, PlayerName } from "../../components";

import "./style.css";

export function BoardGame(amountCards) {
  const $htmlCardGame = CardGame();
  const $htmlBoardGame = $htmlCardGame.repeat(amountCards || 1);
  const $htmlPlayers = PlayerName("André", "Eduardo");

  return `
  <section class="board-game">
    ${$htmlPlayers, $htmlBoardGame}
  </section>
  `;
}
