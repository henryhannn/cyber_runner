import Sprite from './sprite';

class Obstacle extends Sprite {
  constructor(id, speedChange) {
    super();
    this.position = {
      id: id,
      x: 1000,
      y: this.getRandomY(50, 450),
      width: 1400,
      height: 1200,
      frameX: 0,
      frameY: 0,
      speed: Math.random() * 1.5 + speedChange,
    };
    this.obstacleImages = [
      "dist/images/enemy-motorcycle-1.png",
      "dist/images/enemy-motorcycle-2.png"
    ];
    this.obstacleSprite = new Image();
    this.obstacleSprite.src = this.obstacleImages[
      Math.floor(Math.random() * this.obstacleImages.length)
    ];
  }

  drawObstacleSprite(ctx) {
    this.drawSprite(
      ctx,
      this.obstacleSprite,
      this.position.frameX,
      this.position.frameY,
      this.position.width,
      this.position.height,
      this.position.x,
      this.position.y,
      this.position.width / 18,
      this.position.height / 20
    )
  }

  getSpawnPoint(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  getRandomY(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  update(canvas) {
    if (this.position.x > 0 - this.position.width / 20) {
      this.position.x -= this.position.speed;
    } else {
      this.position.x = canvas.width + this.position.width / 20;
    }
  }
}

export default Obstacle;