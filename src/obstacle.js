class Obstacle {
  constructor(params) {
    this.position = params.startPos;
    this.speed = params.speed;
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

  move() {
    this.position[0] -= this.speed;
  }
}