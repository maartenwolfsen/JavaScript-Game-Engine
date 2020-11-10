const gameObj = document.getElementById("game");
const game = gameObj.getContext("2d");

const canvas = {
    width: gameObj.offsetWidth,
    height: gameObj.offsetHeight
};

function clearCanvas() {
    game.clearRect(0, 0, canvas.width, canvas.height);
}
