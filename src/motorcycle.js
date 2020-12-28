import Sprite from "./sprite";

class Motorcycle extends Sprite {
  constructor() {
    super();
    this.keys = [];
    this.motorcycle = {
      x: 80,
      y: 187.5,
      width: 3257.5,
      height: 4955.5,
      frameX: 3257.5,
      frameY: 0,
      speed: 6,
      moving: false,
    };
    this.motorcycleSprite = new Image();
    this.motorcycleSprite.src = "dist/images/player-motorcycle.png";
  }

  drawMotorcycleSprite(ctx) {
    this.drawSprite(
      ctx,
      this.motorcycleSprite,
      this.motorcycle.frameX,
      this.motorcycle.frameY,
      this.motorcycle.width,
      this.motorcycle.height,
      this.motorcycle.x,
      this.motorcycle.y,
      this.motorcycle.width / 55,
      this.motorcycle.height / 55
    );
  }

  movementListener() {
    window.addEventListener("keydown", (e) => {
      if (e.keyCode === "38" || e.keyCode === "40") {
        e.preventDefault();
      }
      this.keys[e.keyCode] = true;
    });

    window.addEventListener("keyup", (e) => {
      if (e.keyCode === "38" || e.keyCode === "40") {
        e.preventDefault();
      }
    });
  }

  moveMotorcycle() {
    if (this.keys["38"] && this.motorcycle.y > 0) {
      this.motorcycle.y -= this.motorcycle.speed;
    }
    if (this.keys["40"] && this.motorcycle.y < 500 - this.motorcycle.height / 55) {
      this.motorcycle.y += this.motorcycle.speed;
    }
  }
}

export default Motorcycle;