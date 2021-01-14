import Sprite from './sprite';

class Obstacle extends Sprite {
  constructor(id, speedChange) {
    super();
    this.obstacle = {
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
      this.obstacle.frameX,
      this.obstacle.frameY,
      this.obstacle.width,
      this.obstacle.height,
      this.obstacle.x,
      this.obstacle.y,
      this.obstacle.width / 18,
      this.obstacle.height / 20
    )
  }

  getSpawnPoint(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  getRandomY(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  update(canvas) {
    if (this.obstacle.x > 0 - this.obstacle.width / 20) {
      this.obstacle.x -= this.obstacle.speed;
    } else {
      this.obstacle.x = canvas.width + this.obstacle.width / 20;
    }
  }
}

export default Obstacle;