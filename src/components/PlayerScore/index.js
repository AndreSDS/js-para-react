import "./style.css";

export function PlayerScore(points = 0) {
  return /*html*/ `
    <ol class="player-score" data-points="${points}">
      <li class="point"></li>
      <li class="point"></li>
      <li class="point"></li>
    </ol>
  `;
}
