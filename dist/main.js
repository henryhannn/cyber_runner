/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _motorcycle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./motorcycle */ \"./src/motorcycle.js\");\n/* harmony import */ var _obstacle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./obstacle */ \"./src/obstacle.js\");\n\n\n\nclass Game {\n  constructor() {\n    this.motorcycle = new _motorcycle__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n    this.obstacles = {};\n    this.score = 0;\n    this.paused = false;\n  }\n\n  spawnObstacle() {\n    let speedChange = 1.0;\n    let numOfObstacles = 5;\n    const getRandomObstacle = (min, max) => {\n      return Math.floor(Math.random() * (max - min + 1) + min);\n    }\n\n    setInterval(() => {\n      if (!this.paused) {\n        this.score += speedChange;\n      }\n    }, 500)\n\n    setInterval(() => {\n      if (!this.paused) {\n        const randomObstacleNum = getRandomObstacle(1, numOfObstacles) \n        for (let i = 0; i < randomObstacleNum; i++) {\n          const id = Math.random()\n          this.obstacles[id] = new _obstacle__WEBPACK_IMPORTED_MODULE_1__[\"default\"](id, speedChange); \n        }\n      }\n    }, 3000)\n\n    setInterval(() => {\n      if (!this.paused) {\n        if (speedChange < 7.0) speedChange += 0.75;\n      }\n    }, 15000)\n\n    setInterval(() => {\n      if (!this.paused) {\n        if (numOfObstacles < 5) numOfObstacles += 1;\n      }\n    }, 30000)\n  }\n\n  moveObstacle(ctx, canvas) {\n    const obstacles = Object.values(this.obstacles);\n    for (let i = 0; i < obstacles.length; i++) {\n      obstacles[i].drawObstacleSprite(ctx);\n      obstacles[i].update(canvas);\n    }\n  }\n\n  gameOver() {\n    this.paused = true;\n    const gameOverPopUp = document.querySelector(\".game-over-popup1\");\n    gameOverPopUp.removeAttribute(\"id\", \"clear-game-over-popup\"); \n    const pauseGameButton = document.querySelector(\".pause-game-button\");\n    pauseGameButton.setAttribute(\"id\", \"clear-game-pause\");\n  }\n\n  checkCollision() {\n    const obstacles = Object.values(this.obstacles);\n    for (let i = 0; i < obstacles.length; i++) {\n      let obstacle = obstacles[i].position;\n      if (!this.paused) {\n        if ((obstacle.x < this.motorcycle.position.x + 27) && (obstacle.x > this.motorcycle.position.x - 29)\n          && (obstacle.y < this.motorcycle.position.y + 9) && (obstacle.y > this.motorcycle.position.y - 12)) {\n          this.gameOver();\n        }\n      }\n    }\n  }\n\n  createGame(ctx, canvas) {\n    this.motorcycle.movementListener();\n    this.spawnObstacle();\n    setInterval(() => {\n      if (!this.paused) {\n        ctx.clearRect(0, 0, canvas.width, canvas.height);\n        ctx.font = 'bold 40px monospace';\n        ctx.fillStyle = 'black';\n        ctx.fillText(`Score: ${Math.abs(this.score)}`, 390, 40);\n        this.motorcycle.drawMotorcycleSprite(ctx);\n        this.motorcycle.moveMotorcycle();\n        this.moveObstacle(ctx, canvas);\n      }\n    }, 20);\n    setInterval(() => {\n      if (!this.paused) {\n        this.checkCollision();\n      }\n    }, 5);\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\ndocument.addEventListener('DOMContentLoaded', function() {\n  const canvas = document.getElementById('game-canvas');\n  const ctx = canvas.getContext('2d');\n  canvas.width = 1000;\n  canvas.height = 500;\n\n  const startGameButton = document.querySelector('.game-start-button'); \n\n  console.log(startGameButton);\n\n  startGameButton.addEventListener('click', function(e) {\n    e.preventDefault();\n    closeStartGameButton();  \n    startGame(); \n  });\n\n  function closeStartGameButton() {\n    startGameButton.setAttribute('id', 'close-start-button');\n    startGameButton.removeEventListener('click', function(e) {\n      e.preventDefault(); \n      closeStartGameButton();\n      startGame(); \n    })\n  };\n\n  let currentGame;  \n\n  function startGame() {\n    const game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n    currentGame = game; \n    game.createGame(ctx, canvas);\n    const pauseGameButton = document.querySelector('.pause-game-button');\n    pauseGameButton.removeAttribute('id', 'clear-game-pause');\n    pauseGame(game); \n    unpauseGame(game);\n  };\n\n  function closeStartGameButton() {\n    startGameButton.setAttribute(\"id\", \"close-start-button\");\n    startGameButton.removeEventListener(\"click\", function(e) {\n      e.preventDefault(); \n      closeStartGameButton();\n      startGame(); \n    })\n  }\n\n  const restartButton = document.getElementById('restart-button');\n  \n  restartButton.addEventListener('click', function(e) {\n    e.preventDefault(); \n    pauseGame();\n    unpauseGame(); \n    const pauseGameButton = document.querySelector('.pause-game-button');\n    pauseGameButton.setAttribute('id', 'clear-game-pause');\n    const gameOverPopUp = document.querySelector('.game-over-popup');\n    gameOverPopUp.setAttribute('id', 'clear-game-over-popup');\n    startGame(); \n  });\n\n  const _func1 = function (e) {\n    e.preventDefault();\n    const pauseGameButton = document.querySelector('.pause-game-button');\n    const playGameButton = document.querySelector('.play-game-button');\n    currentGame.paused = true;\n    pauseGameButton.setAttribute('id', 'clear-game-pause');\n    playGameButton.removeAttribute('id', 'clear-game-play');\n  };\n  \n  function pauseGame(game) {\n    const pauseGameButton = document.querySelector('.pause-game-button');\n    const playGameButton = document.querySelector('.play-game-button');\n    if (game) {\n      pauseGameButton.addEventListener('click', _func1);\n    } else {\n      pauseGameButton.removeEventListener('click', _func1);\n    }\n  };\n\n  const _func2 = function () {\n    event.preventDefault();\n    const playGameButton = document.querySelector('.play-game-button');\n    const pauseGameButton = document.querySelector('.pause-game-button');\n    currentGame.paused = false; \n    playGameButton.setAttribute('id', 'clear-game-play');\n    pauseGameButton.removeAttribute('id', 'clear-game-pause');\n  };\n\n  function unpauseGame(game) {\n    const playGameButton = document.querySelector('.play-game-button');\n    const pauseGameButton = document.querySelector('.pause-game-button');\n    if (game) {\n      playGameButton.addEventListener('click', _func2.bind(event, game))\n    } else {\n      playGameButton.removeEventListener('click', _func2.bind(event, game));\n    }\n  };\n\n  const music = document.getElementById(\"music\");\n  const play = document.getElementById(\"play-music\");\n  const pause = document.getElementById(\"pause-music\");\n\n  play.addEventListener(\"click\", function (e) {\n    e.preventDefault();\n    playAudio();\n    play.setAttribute(\"class\", \"clear-music-button\");\n    pause.removeAttribute(\"class\", \"clear-music-button\"); \n  });\n\n  pause.addEventListener(\"click\", function (e) {\n    e.preventDefault();\n    pauseAudio();\n    pause.setAttribute(\"class\", \"clear-music-button\");\n    play.removeAttribute(\"class\", \"clear-music-button\");\n  });\n\n  function playAudio() {\n    music.play();\n  }\n\n  function pauseAudio() {\n    music.pause();\n  }\n})\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/motorcycle.js":
/*!***************************!*\
  !*** ./src/motorcycle.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sprite */ \"./src/sprite.js\");\n\n\nclass Motorcycle extends _sprite__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor() {\n    super();\n    this.keys = [];\n    this.position = {\n      x: 80,\n      y: 200,\n      width: 1400,\n      height: 1200,\n      frameX: 0,\n      frameY: 0,\n      ySpeed: 4,\n      xSpeed: 5,\n    };\n    this.motorcycleSprite = new Image();\n    this.motorcycleSprite.src = \"dist/images/player-motorcycle.png\";\n  }\n\n  drawMotorcycleSprite(ctx) {\n    this.drawSprite(\n      ctx,\n      this.motorcycleSprite,\n      this.position.frameX,\n      this.position.frameY,\n      this.position.width,\n      this.position.height,\n      this.position.x,\n      this.position.y,\n      this.position.width / 15,\n      this.position.height / 17\n    );\n  }\n\n  movementListener() {\n    window.addEventListener(\"keydown\", (e) => {\n      if (e.keyCode === 38 || e.keyCode === 40 || e.keyCode === 37 || e.keyCode === 39) {\n        e.preventDefault();\n      }\n      this.keys[e.keyCode] = true;\n    });\n\n    window.addEventListener(\"keyup\", (e) => {\n      if (e.keyCode === 38 || e.keyCode === 40 || e.keyCode === 37 || e.keyCode === 39) {\n        e.preventDefault();\n      }\n      delete this.keys[e.keyCode];\n    });\n  }\n\n  moveMotorcycle() {\n    if (this.keys[38] && this.position.y > 50) {\n      this.position.y -= this.position.ySpeed;\n    }\n    if (this.keys[40] && this.position.y < 450) {\n      this.position.y += this.position.ySpeed;\n    }\n    if (this.keys[37] && this.position.x > 5) {\n      this.position.x -= this.position.xSpeed;\n    }\n    if (this.keys[39] && this.position.x < 900) {\n      this.position.x += this.position.xSpeed;\n    }\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Motorcycle);\n\n//# sourceURL=webpack:///./src/motorcycle.js?");

/***/ }),

/***/ "./src/obstacle.js":
/*!*************************!*\
  !*** ./src/obstacle.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sprite */ \"./src/sprite.js\");\n\n\nclass Obstacle extends _sprite__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(id, speedChange) {\n    super();\n    this.position = {\n      id: id,\n      x: 1000,\n      y: this.getRandomY(50, 450),\n      width: 1400,\n      height: 1200,\n      frameX: 0,\n      frameY: 0,\n      speed: Math.random() * 1.5 + speedChange,\n    };\n    this.obstacleImages = [\n      \"dist/images/enemy-motorcycle-1.png\",\n      \"dist/images/enemy-motorcycle-2.png\"\n    ];\n    this.obstacleSprite = new Image();\n    this.obstacleSprite.src = this.obstacleImages[\n      Math.floor(Math.random() * this.obstacleImages.length)\n    ];\n  }\n\n  drawObstacleSprite(ctx) {\n    this.drawSprite(\n      ctx,\n      this.obstacleSprite,\n      this.position.frameX,\n      this.position.frameY,\n      this.position.width,\n      this.position.height,\n      this.position.x,\n      this.position.y,\n      this.position.width / 15,\n      this.position.height / 17\n    )\n  }\n\n  getSpawnPoint(min, max) {\n    return Math.floor(Math.random() * (max - min + 1) + min);\n  }\n\n  getRandomY(min, max) {\n    return Math.floor(Math.random() * (max - min + 1) + min);\n  }\n\n  update(canvas) {\n    if (this.position.x > 0 - this.position.width / 20) {\n      this.position.x -= this.position.speed;\n    } else {\n      this.position.x = canvas.width + this.position.width / 20;\n    }\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Obstacle);\n\n//# sourceURL=webpack:///./src/obstacle.js?");

/***/ }),

/***/ "./src/sprite.js":
/*!***********************!*\
  !*** ./src/sprite.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Sprite {\n  constructor() {\n  }\n\n  drawSprite(ctx, img, sX, sY, sW, sH, dX, dY, dW, dH) {\n    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sprite);\n\n//# sourceURL=webpack:///./src/sprite.js?");

/***/ })

/******/ });