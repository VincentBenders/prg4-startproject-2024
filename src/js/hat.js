import { Actor, Vector } from "excalibur";
import { Resources } from "./resources";

export class Hat extends Actor{
     onInitialize(engine){
        this.graphics.use(Resources.Hat.toSprite());
        width:Resources.Enemy.width;
        height:Resources.Enemy.height;
        this.scale = new Vector(14, 14)
        // this.pos = new Vector(200, 200);
        
     }
}