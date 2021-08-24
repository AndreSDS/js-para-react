import { CardGame, PlayerName } from "../../components";

import "./style.css";

export function BoardGame(amountCards) {
  const $htmlCardGame = CardGame();
  const $htmlBoardGame = $htmlCardGame.repeat(amountCards || 1);

  return `
    ${PlayerName("Player 1", "Player 2")}
    <section class="board-game">
      ${$htmlBoardGame}
    </section>
  `;
}