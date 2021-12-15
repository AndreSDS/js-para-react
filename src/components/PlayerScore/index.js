import "./style.css";

export function PlayerScore() {
  return /*html*/ `
    <article class="score">
      <div class="points-container">
        <div class="points"></div>
        <div class="points"></div>
        <div class="points"></div>
      </div>
        <h1>vs</h1>
      <div class="points-container">
        <div class="points"></div>
        <div class="points"></div>
        <div class="points"></div>
      </div>
    </article>
  `;
}
