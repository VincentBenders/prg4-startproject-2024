import { Keys, Scene, Vector } from "excalibur";
import { Label, FontUnit, Font} from "excalibur";
import { Game } from "./game.js"

export class GameOver extends Scene {


    onInitialize(engine){
        let label = new Label({
            text: 'Game Over',
            pos: new Vector(400, 100),
            font: new Font({
                family: 'impact',
                size: 24,
                unit: FontUnit.Px
            })
        })
        
        this.add(label)
        let result = new Label({
            text: 'score',
            pos: new Vector(400, 120),
            font: new Font({
                family: 'impact',
                size: 24,
                unit: FontUnit.Px
            })
        })
        result.text = 'Score: '+engine.score;
        
        this.add(result)

    }

    /**
 * @param {Game} engine Description
*/
    onPostUpdate(engine){
        if (engine.input.keyboard.wasPressed(Keys.Space)) {
            engine.score = 0
            engine.goToScene('level')
         }
    }
    }