let player = {
    x: canvas.width / 2,
    y: canvas.height - 100,
    speed: 1
};

function drawPlayer() {
    const x = player.x;
    const y = player.y;
    game.fillStyle = "#FF00FF";

    game.beginPath();
    game.moveTo(x, y);
    game.lineTo(x + 15,y + 50);
    game.lineTo(x - 15,y + 50);
    game.fill();
}
