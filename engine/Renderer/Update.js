import {renderMap} from "/engine/Renderer/Renderer.js";
import {PlayerMovement} from "/engine/Player/Movement.js";
import {Player} from "/engine/Player/Player.js";
import {Canvas} from "/engine/Core/Canvas.js";

const canvas = new Canvas();
const playerMovement = new PlayerMovement();
const player = new Player();

setInterval(update, 1);

function update() {
    canvas.clearCanvas();
    renderMap("test");
    playerMovement.registerKeys();
    playerMovement.movePlayer(player);
    player.drawPlayer();
}
