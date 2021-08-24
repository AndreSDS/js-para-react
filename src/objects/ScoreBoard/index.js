import { PlayerName } from "../../components";
import "./style.css";

export function ScoreBoard() {

  return /*html*/`
    <header class="score-board">
      ${PlayerName('Player1')}
      ${PlayerName('Player2')}
    </header>
  `;
}