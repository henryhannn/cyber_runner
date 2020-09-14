class Sprite {
  constructor() {

  }

  drawSprite(img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight) {
    ctx.drawImage(img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
  }
}

export default Sprite;