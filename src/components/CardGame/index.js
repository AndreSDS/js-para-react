import './styles.css';

//get article with id=card-game
const cardGame = document.querySelector('article.card-game');
export function CardGame(frontImg, backImg) {

  //function to flip card
  const flipCard = (frontImg, backImg) => {
    console.log(cardGame);
    //cardGame.classList.add('flip');
  }

  return `
    <article class="card-game">

          <div class="front-of-card">
            <img src="${frontImg}" alt="logo da alura" />
          </div>

          <div class="back-of-card">
            <img src="${backImg}" alt="logo do javascript">
          </div>

    </article>
  `;
}
