import Game from './game';

document.addEventListener('DOMContentLoaded', function() {
  const canvas = document.getElementById('game-canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = 1000;
  canvas.height = 500;

  const startGameButton = document.querySelector('.game-start-button'); 

  console.log(startGameButton);

  startGameButton.addEventListener('click', function(e) {
    e.preventDefault();
    closeStartGameButton();  
    startGame(); 
  });

  function closeStartGameButton() {
    startGameButton.setAttribute('id', 'close-start-button');
    startGameButton.removeEventListener('click', function(e) {
      e.preventDefault(); 
      closeStartGameButton();
      startGame(); 
    })
  };

  let currentGame;  

  function startGame() {
    const game = new Game;
    currentGame = game; 
    game.createGame(ctx, canvas);
    const pauseGameButton = document.querySelector('.pause-game-button');
    pauseGameButton.removeAttribute('id', 'clear-game-pause');
    pauseGame(game); 
    unpauseGame(game);
  };

  function closeStartGameButton() {
    startGameButton.setAttribute("id", "close-start-button");
    startGameButton.removeEventListener("click", function(e) {
      e.preventDefault(); 
      closeStartGameButton();
      startGame(); 
    })
  }

  const restartButton = document.getElementById('restart-button');
  
  restartButton.addEventListener('click', function(e) {
    e.preventDefault(); 
    pauseGame();
    unpauseGame(); 
    const pauseGameButton = document.querySelector('.pause-game-button');
    pauseGameButton.setAttribute('id', 'clear-game-pause');
    const gameOverPopUp = document.querySelector('.game-over-popup');
    gameOverPopUp.setAttribute('id', 'clear-game-over-popup');
    startGame(); 
  });

  const _func1 = function (e) {
    e.preventDefault();
    const pauseGameButton = document.querySelector('.pause-game-button');
    const playGameButton = document.querySelector('.play-game-button');
    currentGame.paused = true;
    pauseGameButton.setAttribute('id', 'clear-game-pause');
    playGameButton.removeAttribute('id', 'clear-game-play');
  };
  
  function pauseGame(game) {
    const pauseGameButton = document.querySelector('.pause-game-button');
    const playGameButton = document.querySelector('.play-game-button');
    if (game) {
      pauseGameButton.addEventListener('click', _func1);
    } else {
      pauseGameButton.removeEventListener('click', _func1);
    }
  };

  const _func2 = function () {
    event.preventDefault();
    const playGameButton = document.querySelector('.play-game-button');
    const pauseGameButton = document.querySelector('.pause-game-button');
    currentGame.paused = false; 
    playGameButton.setAttribute('id', 'clear-game-play');
    pauseGameButton.removeAttribute('id', 'clear-game-pause');
  };

  function unpauseGame(game) {
    const playGameButton = document.querySelector('.play-game-button');
    const pauseGameButton = document.querySelector('.pause-game-button');
    if (game) {
      playGameButton.addEventListener('click', _func2.bind(event, game))
    } else {
      playGameButton.removeEventListener('click', _func2.bind(event, game));
    }
  };

  const music = document.getElementById("music");
  const play = document.getElementById("play");
  const pause = document.getElementById("pause");

  play.addEventListener("click", function (e) {
    e.preventDefault();
    playAudio();
    play.setAttribute("class", "clear-music-button");
    pause.removeAttribute("class", "clear-music-button"); 
  });

  pause.addEventListener("click", function (e) {
    e.preventDefault();
    pauseAudio();
    pause.setAttribute("class", "clear-music-button");
    play.removeAttribute("class", "clear-music-button");
  });

  function playAudio() {
    music.play();
  }

  function pauseAudio() {
    music.pause();
  }
})