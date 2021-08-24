import { CardGame, PlayerName } from "../../components";

export function BoardGame(amountCards) {
  const $htmlCardGame = CardGame();
  const $htmlBoardGame = $htmlCardGame.repeat(amountCards || 1);
  const $htmlPlayers = PlayerName('André', 'Eduardo');

  return `
    ${$htmlPlayers}
    ${$htmlBoardGame}
  `;
}