import Motorcycle from './motorcycle';
import Obstacle from './obstacle';

class Game {
  constructor() {
    this.motorcycle = new Motorcycle;
    this.obstacles = {};
    this.score = 0;
    this.paused = false;
  }

  spawnObstacle() {
    let speedChange = 1.0;
    let numOfObstacles = 5;
    const getRandomObstacle = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }

    setInterval(() => {
      if (!this.paused) {
        this.score += speedChange;
      }
    }, 500)

    setInterval(() => {
      if (!this.paused) {
        const randomObstacleNum = getRandomObstacle(1, numOfObstacles) 
        for (let i = 0; i < randomObstacleNum; i++) {
          const id = Math.random()
          this.ghosts[id] = new Obstacle(id, speedChange); 
        }
      }
    }, 3000)

    setInterval(() => {
      if (!this.paused) {
        if (speedChange < 7.0) speedChange += 0.75;
      }
    }, 15000)

    setInterval(() => {
      if (!this.paused) {
        if (numOfObstacles < 5) numOfObstacles += 1;
      }
    }, 30000)
  }

  moveObstacle(ctx, canvas) {
    const obstacles = Object.values(this.obstacles);
    for (let i = 0; i < obstacles.length; i++) {
      obstacles[i].drawObstacleSprite(ctx);
      obstacles[i].update(canvas);
    }
  }

  gameOver() {
    this.paused = true;
    const gameOverPopUp = document.querySelector(".game-over-popup1");
    gameOverPopUp.removeAttribute("id", "clear-game-over-popup"); 
    const pauseGameButton = document.querySelector(".pause-game-button");
    pauseGameButton.setAttribute("id", "clear-game-pause");
  }

  checkCollision() {
    const obstacles = Object.values(this.obstacles);
    for (let i = 0; i < obstacles.length; i++) {
      let obstacle = obstacles[i].obstacle;
      if (!this.paused) {
        if ((obstacle.x === this.motorcycle.x) && (obstacle.y === this.motorcycle.y)) {
          this.gameOver();
        }
      }
    }
  }

  createGame(ctx, canvas) {
    this.motorcycle.movementListener();
    this.spawnObstacle();
    setInterval(() => {
      if (!this.paused) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.font = 'bold 40px serif';
        ctx.fillStyle = 'black';
        ctx.fillText(`Score: ${this.score}`, 350, 40);
        this.motorcycle.drawMotorcycleSprite(ctx);
        this.motorcycle.moveMotorcycle;
        this.moveObstacle(ctx, canvas);
        this.checkCollision();
      }
    }, 20)
  }
}

export default Game;