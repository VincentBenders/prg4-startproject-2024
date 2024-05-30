import { Actor, Engine, Keys, Vector } from "excalibur";
import { Resources } from "./resources";
export class Bullet extends Actor {
    constructor(position) {
        super({
          pos: position,
          vel: new Vector(0, -340),
          width:Resources.Bullet.width,
          height:Resources.Bullet.height
          
        })
        console.log(position)
    }

    onInitialize(){
      this.graphics.use(Resources.Bullet.toSprite());
      this.scale = new Vector(2, 2)
    }
    onPreUpdate(engine) { 
    
    }
  }
  