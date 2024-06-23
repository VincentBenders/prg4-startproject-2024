import { Actor, Sprite, Vector } from "excalibur";
import { Resources } from "./resources";

export class Background extends Actor{
   sprite
   onInitialize(engine){

       this.sprite = new Sprite({
           image: Resources.GameOver,
           sourceView: { x: -75, y: 0, width: engine.drawWidth, height: engine.drawHeight }
       })
       this.anchor = Vector.Zero
       this.graphics.use(this.sprite);
   }
}