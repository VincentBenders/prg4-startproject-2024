import { Actor, Engine, Sprite, Vector } from "excalibur";
import { Resources } from "./resources";

export class Map extends Actor {
    sprite
    onInitialize(engine){

        this.sprite = new Sprite({
            image: Resources.Map,
            sourceView: { x: 0, y: 0, width: engine.drawWidth, height: engine.drawHeight }
        })
        this.anchor = Vector.Zero
        this.graphics.use(this.sprite);
    }

    onPostUpdate(engine, delta) {
        this.sprite.sourceView.y -= .07 * delta;
    }
}
