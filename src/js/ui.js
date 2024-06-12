import { Color, Font, FontUnit, Label, ScreenElement, Vector } from "excalibur"
import { Resources } from "./resources"

export class UI extends ScreenElement {

    scoreText

    onInitialize(engine) {
        this.scoreText = new Label({
            text: 'Score: 0',
            pos: new Vector(0, 0),
            font: new Font({
                family: 'impact',
                size: 24,
                unit: FontUnit.Px
            })
        })
        this.addChild(this.scoreText)
    }

    updateScore(score) {
        this.scoreText.text = 'Score: '+score
        //@ts-ignore
        console.log(this.scene?.engine.score);
    }
}