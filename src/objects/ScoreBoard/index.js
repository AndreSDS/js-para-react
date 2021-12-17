import { PlayerName, PlayerScore, VsPlayer, ArrowDown } from "../../components";
import {BoardGame} from "../BoardGame";
import "./style.css";

export function ScoreBoard() {

  return /*html*/`
    <header class="score-board">
      ${ArrowDown()}
      ${PlayerName('Player1')}
      ${PlayerScore(2)}
      ${VsPlayer()}
      ${PlayerScore(3)}
      ${PlayerName('Player2')}
    </header>
    ${BoardGame(6)}
  `;
}