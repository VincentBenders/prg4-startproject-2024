import { Keys, Scene, Vector } from "excalibur";
import { Label, FontUnit, Font} from "excalibur";
import { Game } from "./game.js"

export class GameOver extends Scene {

    game
    result
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
        this.result = new Label({
            text: 'score',
            pos: new Vector(400, 120),
            font: new Font({
                family: 'impact',
                size: 24,
                unit: FontUnit.Px
            })
        })
        
        this.game = engine
    }

    onActivate(engine){

        
        this.result.text = 'Score: '+this.game.score;
        
        this.add(this.result)
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