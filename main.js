import "./src/styles/generic/reset.css";
import "./src/styles/elements/base.css";
import "./src/styles/settings/colors.css";
import "./style.css";

import { BoardGame } from "./src/objects";

const $root = document.querySelector("#root");
const $htmlBoardGame = BoardGame(6);

$root.insertAdjacentHTML("beforeend", $htmlBoardGame);
