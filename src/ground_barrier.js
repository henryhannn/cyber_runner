const Obstacle = require('./obstacle');

const GROUND_BARRIER_SPRITE = {

};

const GROUND_BARRIER_HITBOX= {
  posX: 30,
  posY: 20,
  sizeX: 50,
  sizeY: 100
};

class GroundBarrier extends Obstacle {
  constuctor(params) {
    super(params);
    params.hitbox = GROUND_BARRIER_HITBOX;
    this.sprite = options.sprite;
  }
}