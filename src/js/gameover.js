import { Color, Keys, Scene, Vector } from "excalibur";
import { Label, FontUnit, Font} from "excalibur";
import { Game } from "./game.js"

export class GameOver extends Scene {

    game
    result
    onInitialize(engine){
        let label = new Label({
            text: 'Game Over',
            pos: new Vector(240, 290),
            font: new Font({
                family: 'sans-serif',
                size: 60,
                unit: FontUnit.Px,
                color: Color.White
            })
        })
        this.add(label)
        this.result = new Label({
            text: 'score',
            pos: new Vector(310, 360),
            font: new Font({
                family: 'sans-serif',
                size: 44,
                unit: FontUnit.Px,
                color: Color.White
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