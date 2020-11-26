export function PlayerMovement() {
    let keys = {
        top: false,
        bottom: false,
        left: false,
        right: false
    }

    this.setKeys = function(newKeys) {
        keys = newKeys;
    }

    this.registerKeys = function() {
        document.onkeydown = function(e) {
            if (e.key === config.game.keys.top) keys.top = true;
            if (e.key === config.game.keys.bottom) keys.bottom = true;
            if (e.key === config.game.keys.left) keys.left = true;
            if (e.key === config.game.keys.right) keys.right = true;
        }

        document.onkeyup = function(e) {
            if (e.key === config.game.keys.top) keys.top = false;
            if (e.key === config.game.keys.bottom) keys.bottom = false;
            if (e.key === config.game.keys.left) keys.left = false;
            if (e.key === config.game.keys.right) keys.right = false;
        }

        this.setKeys(keys);
    }

    this.movePlayer = function(player) {
        let playerX = player.getX();
        let playerY = player.getY();
        let playerAS = player.getAnimationState();
        let playerSpeed = player.getSpeed();

        if (keys.left) {
            playerX -= playerSpeed;
            playerAS = "walk_left";
        }

        if (keys.right) {
            playerX += playerSpeed;
            playerAS = "walk_right";
        }

        if (keys.top) {
            playerY -= playerSpeed;
            playerAS = "walk_top";
        }

        if (keys.bottom) {
            playerY += playerSpeed;
            playerAS = "walk_down";
        }

        player.setX(playerX);
        player.setY(playerY);
        player.setAnimationState(playerAS);
        player.setSpeed(playerSpeed);
    }
}
