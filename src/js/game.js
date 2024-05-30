import "../css/style.css";
import { Actor, Engine, Vector } from "excalibur";
import { Resources, ResourceLoader } from "./resources.js";
import { Enemy } from "./enemy.js";
import { Ship } from "./ship.js";
import { Map } from "./map.js";
import { GameOver } from "./gameover.js";
import { StartScreen } from "./startscreen.js";
import { LevelScreen } from "./level.js";

export class Game extends Engine {
  // TODO: score var
  score = 0;
  constructor() {
    super({ width: 800, height: 750 });
    this.start(ResourceLoader).then(() => this.startGame());
  }

  

  
  /*
  TODO:
  - make ui for score
  - make shield for enemy(for composition )
  */

  startGame() {
    console.log("start de game!");
    this.add('startscreen', new StartScreen())
    this.add('gameover', new GameOver())
    this.add('level', new LevelScreen)
    this.goToScene('startscreen')
  }
  
}

new Game();
