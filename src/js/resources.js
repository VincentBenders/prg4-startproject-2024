import { ImageSource, Sound, Resource, Loader, ImageWrapping } from "excalibur";

const Resources = {
  Fish: new ImageSource("images/fish.png"),
  Enemy: new ImageSource("images/enemy.png"),
  Ship: new ImageSource("images/ship.png"),
  Map: new ImageSource("images/map.png", { wrapping: ImageWrapping.Repeat}),
  Bullet: new ImageSource('images/bullet.png'),
  Hat: new ImageSource("images/hat.png")
};
const ResourceLoader = new Loader([
  Resources.Fish,
  Resources.Enemy,
  Resources.Ship,
  Resources.Map,
  Resources.Bullet,
  Resources.Hat
]);

export { Resources, ResourceLoader };
