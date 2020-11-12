import {drawPlayer} from "/engine/player/player.js";
import {move} from "/engine/player/movement.js";

setInterval(update, 1);

function update() {
    clearCanvas();
    move();
    drawPlayer();
}
