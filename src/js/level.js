import { Font, FontUnit, Keys, Label, Scene, ScrollPreventionMode, Vector } from "excalibur";
import { Enemy } from "./enemy";
import { Ship } from "./ship";
import { Map } from "./map";
import { UI } from "./ui.js";

export class LevelScreen extends Scene {
    enemyInterval = 0
    ui;

    onInitialize() {
      
    }

    onActivate(engine){
      for(const actor of this.actors){
        actor.kill()
  
      }
    const map = new Map();
    const ship = new Ship();
    this.ui = new UI();
    this.add(map)
    this.add(ship);

    this.add(this.ui);
    }

    onPostUpdate(engine){
        if(this.enemyInterval  == 120){
          this.createEnemy()
          this.enemyInterval = 0;
        }
    
        this.enemyInterval++
      }
    
      createEnemy(){
        const enemy = new Enemy(this.getRandomInt(600));
        this.add(enemy)
      }
    
      getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
    }