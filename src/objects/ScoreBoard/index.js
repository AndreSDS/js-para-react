import { PlayerName } from "../../components";
import "./style.css";

export function ScoreBoard() {

  return /*html*/`
    <header>
      ${PlayerName('Player1')}
      ${PlayerName('Player2')}
    </header>
  `;
}