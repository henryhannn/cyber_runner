import Sprite from "./sprite";

class Motorcycle extends Sprite {
  constructor() {
    super();
    this.keys = [];
    this.position = {
      x: 80,
      y: 200,
      width: 1400,
      height: 1200,
      frameX: 0,
      frameY: 0,
      speed: 6,
      // moving: false,
    };
    this.motorcycleSprite = new Image();
    this.motorcycleSprite.src = "dist/images/player-motorcycle.png";
  }

  drawMotorcycleSprite(ctx) {
    this.drawSprite(
      ctx,
      this.motorcycleSprite,
      this.position.frameX,
      this.position.frameY,
      this.position.width,
      this.position.height,
      this.position.x,
      this.position.y,
      this.position.width / 18,
      this.position.height / 20
    );
  }

  movementListener() {
    window.addEventListener("keydown", (e) => {
      if (e.keyCode === 38 || e.keyCode === 40 || e.keyCode === 37 || e.keyCode === 39) {
        e.preventDefault();
      }
      this.keys[e.keyCode] = true;
    });

    window.addEventListener("keyup", (e) => {
      if (e.keyCode === 38 || e.keyCode === 40 || e.keyCode === 37 || e.keyCode === 39) {
        e.preventDefault();
      }
      delete this.keys[e.keyCode];
    });
  }

  moveMotorcycle() {
    if (this.keys[38] && this.position.y > 0) {
      this.position.y -= this.position.speed;
    }
    if (this.keys[40] && this.position.y < 500 - this.position.height / 20) {
      this.position.y += this.position.speed;
    }
  }
}

export default Motorcycle;