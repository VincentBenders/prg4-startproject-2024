import { ImageSource, Sound, Resource, Loader, ImageWrapping } from "excalibur";

const Resources = {
  Enemy: new ImageSource("images/enemy.png"),
  Ship: new ImageSource("images/ship.png"),
  Map: new ImageSource("images/map.png", { wrapping: ImageWrapping.Repeat}),
  Bullet: new ImageSource('images/bullet.png'),
  Hat: new ImageSource("images/hat.png"),
  GameOver: new ImageSource("images/gameover.png"),
};
const ResourceLoader = new Loader([
  Resources.Enemy,
  Resources.Ship,
  Resources.Map,
  Resources.Bullet,
  Resources.Hat,
  Resources.GameOver,
]);

export { Resources, ResourceLoader };
