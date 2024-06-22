import { Color, Keys, Scene, Vector } from "excalibur";
import { Label, FontUnit, Font} from "excalibur";

export class StartScreen extends Scene {
    onInitialize(engine) {
        console.log('startscreen');
            let label = new Label({
                text: 'use wasd or arrows to move and space to shoot',
                pos: new Vector(70, 270),
                font: new Font({
                    family: 'sans-serif',
                size: 30,
                unit: FontUnit.Px,
                color: Color.White
                })
            })
            
            this.add(label)
            let label2 = new Label({
                text: 'press space to start!',
                pos: new Vector(250, 305),
                font: new Font({
                    family: 'sans-serif',
                size: 30,
                unit: FontUnit.Px,
                color: Color.White
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