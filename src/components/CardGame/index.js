import './styles.css';

//get article with id=card-game
const cardGame = document.querySelector('article.card-game');
export function CardGame() {

  //function to flip card
  const flipCard = () => {
    console.log(cardGame);
    //cardGame.classList.add('flip');
  }

  return `
    <article class="card-game" onclick='${flipCard}'>

          <div class="front-of-card">
            <img src="src/images/alura-pixel.png" alt="logo da alura" />
          </div>

          <div class="back-of-card">
            <img src="src/images/logo-javascript.png" alt="logo do javascript">
          </div>

    </article>
  `;
}
