import { Keys, Scene, Vector } from "excalibur";
import { Label, FontUnit, Font} from "excalibur";

export class StartScreen extends Scene {
    onInitialize(engine) {
        console.log('startscreen');
            let label = new Label({
                text: 'use wasd or arrows to move and space to shoot!! press space to start!',
                pos: new Vector(10, 250),
                font: new Font({
                    family: 'impact',
                    size: 24,
                    unit: FontUnit.Px
                })
            })
            
            this.add(label)
            let label2 = new Label({
                text: '',
                pos: new Vector(270, 250),
                font: new Font({
                    family: 'impact',
                    size: 24,
                    unit: FontUnit.Px
                })
            })
            
            this.add(label2)
    }

    onPostUpdate(engine){
        if (engine.input.keyboard.wasPressed(Keys.Space)) {
            this.engine.goToScene('level')
         }
    }
}