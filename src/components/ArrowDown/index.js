import "./style.css";

export function ArrowDown(currentPlayer = 1) {
  return /*html*/ `
    <img
    class="arrow-down"
    data-currentPlayer="${currentPlayer}"
    src="src/images/arrow-down.png"
    alt="ícone seta apontando para baixo">
  `;
}
