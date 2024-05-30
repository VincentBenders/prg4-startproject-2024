import { Actor, Engine, Keys, Vector } from "excalibur";
import { Resources } from "./resources";
import { Bullet } from "./bullet";
export class Ship extends Actor {
  constructor(){
    super({width:Resources.Ship.width, height:Resources.Ship.height});
    this.pos = new Vector(400, 700);
    this.vel = new Vector(0, 0);
    this.graphics.use(Resources.Ship.toSprite());
    this.scale = new Vector(0.4, 0.4)
  }
  onPreUpdate(engine) {
    let xspeed = 0;
    let yspeed = 0;

    if (engine.input.keyboard.isHeld(Keys.W) || engine.input.keyboard.isHeld(Keys.Up)) {
      yspeed = -200;
    }

    if (engine.input.keyboard.isHeld(Keys.S) || engine.input.keyboard.isHeld(Keys.Down)) {
      yspeed = 200;
    }

    if (engine.input.keyboard.isHeld(Keys.D) || engine.input.keyboard.isHeld(Keys.Right)) {
      xspeed = 200;
    }

    if (engine.input.keyboard.isHeld(Keys.A) || engine.input.keyboard.isHeld(Keys.Left)) {
      xspeed = -200;
    }

    this.vel = new Vector(xspeed, yspeed);
    
    if (engine.input.keyboard.wasPressed(Keys.Space)) {
      console.log("shoot!", engine)
      const bullet = new Bullet(new Vector(this.pos.x, this.pos.y));
      engine.add(bullet)

  }
  }
}
