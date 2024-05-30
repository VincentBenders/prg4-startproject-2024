import { Actor, Engine, Sprite, Vector } from "excalibur";
import { Resources } from "./resources";
import { Bullet } from "./bullet";
import { Ship } from "./ship";
import { GameOver } from "./gameover";
import { UI } from "./ui";
import { Hat } from "./hat.js";

export class Enemy extends Actor {
  game
  
  

  constructor(pos) {
    super({width:Resources.Enemy.width, height:Resources.Enemy.height});
    this.pos = new Vector(pos, 0);
    this.vel = new Vector(0, 100);
    this.graphics.use(Resources.Enemy.toSprite());
    this.scale = new Vector(0.1, 0.1)
    
  }
  onInitialize(engine){
    this.game = engine;
    const ui = new UI();
    const hat = new Hat();

    this.addChild(hat);
    
    this.on('collisionstart', (event) => this.collisionHandler(event))

  }

  collisionHandler(e) {
    // console.log(e.other);
    if (e.other instanceof Bullet){
      console.log('bullet');
      // TODO: engine.score++;
      this.game.score++
      console.log(this.game.score);
      // TODO: engine.currentScene.ui.updateScore()
      
      // console.log(ui.updateScore());
      this.game.currentScene.ui.updateScore(this.game.score);
      e.other.kill()
    } else if(e.other instanceof Ship){
      console.log('ship');
      e.other.kill()
      this.game.goToScene('gameover')
    }
    this.kill();

  }

  onPreUpdate(engine) {
    // if (this.pos.x <= 100) {
    //   this.vel = new Vector(0, -20);
    // }
    //check if outside game and remove
    if(this.pos.y >= 820){
      this.kill();
    }
    //check and kill on collision
  }
}
