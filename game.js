const gameObj = document.getElementById("game");
const game = gameObj.getContext("2d");

gameObj.width = document.body.clientWidth;
gameObj.height = document.body.clientHeight;
config.game.canvas.width = gameObj.offsetWidth;
config.game.canvas.height = gameObj.offsetHeight;
