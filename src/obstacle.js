import Sprite from './sprite';

class Obstacle extends Sprite {
  constructor(id, speedChange) {
    super();
    this.obstacle = {
      id: id,
      x: 900,
      y: this.getRandomY(50, 450),
      width: 1408,
      height: 1161,
      frameX: 0,
      frameY: 0,
      speed: Math.random() * 1.5 + speedChange,
    };
    this.obstacleImages = [];
    this.obstacleSprite = new Image();
    this.obstacleSprite.src = this.obstacleImages[
      Math.floor(Math.random() + this.obstacleImages.length)
    ];
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.rect(this.position[0], this.position[1], 10, 50);
    ctx.fillStyle = 'black';
    ctx.fill();
    ctx.lineWidth = 1;
    ctx.strokeStyle = 'blue';
    ctx.stroke();
  }

  getRandomY(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
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
      this.obstacle.width / 20,
      this.obstacle.height / 20
    );
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