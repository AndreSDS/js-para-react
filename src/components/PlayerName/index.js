import './style.css';

export function PlayerName(player1, player2) {
  return `
    <header class="player-name">
      <h3 class="player-title">${player1}</h3> vs 
      <h3 class="player-title">${player2}</h3>
    </header>
  `;
}
