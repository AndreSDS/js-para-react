import {CardGame} from './src/components';
import './src/styles/reset/generic.css';
import './src/styles/elements/base.css';
import './src/styles/settings/colors.css';
import './style.css'

const $root = document.querySelector('#root');
const $htmlCardGame = CardGame();

$root.insertAdjacentHTML('beforeend', $htmlCardGame);
