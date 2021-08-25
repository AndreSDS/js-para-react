import "./src/styles/generic/reset.css";
import "./src/styles/elements/base.css";
import "./src/styles/settings/colors.css";
import "./style.css";

import { BoardGame, ScoreBoard } from "./src/objects";

const $root = document.querySelector("#root");

$root.insertAdjacentHTML("beforeend", `${ScoreBoard()} ${BoardGame(2)}`);
