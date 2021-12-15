import './style.css';

export function VsPlayer(content = "vs") {
  return /*html*/ `
    <span class="vs-player">${content}
    </span>
  `;
}
