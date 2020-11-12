import {drawPlayer} from "/engine/player/player.js";
import {move} from "/engine/player/movement.js";
import {renderMap} from "/engine/Renderer/Renderer.js";

renderMap();
setInterval(update, 1);

function update() {
    clearCanvas();
    move();
    drawPlayer();
}
