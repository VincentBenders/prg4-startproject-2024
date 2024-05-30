import { Keys, Scene, Vector } from "excalibur";
import { Label, FontUnit, Font} from "excalibur";


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

    onPostUpdate(engine){
        if (engine.input.keyboard.wasPressed(Keys.Space)) {
            this.engine.goToScene('level')
         }
    }
    }