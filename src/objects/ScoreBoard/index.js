import { PlayerName, PlayerScore } from "../../components";
import {BoardGame} from "../BoardGame";
import "./style.css";

export function ScoreBoard() {

  return /*html*/`
    <header class="score-board">
      ${PlayerName('Player1')}
      ${PlayerScore()}
      ${PlayerName('Player2')}
    </header>
    ${BoardGame(6)}
  `;
}