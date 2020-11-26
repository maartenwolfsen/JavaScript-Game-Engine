export function Canvas() {
    this.clearCanvas = function() {
        game.clearRect(
            0,
            0,
            config.game.canvas.width,
            config.game.canvas.height
        );
    }
}