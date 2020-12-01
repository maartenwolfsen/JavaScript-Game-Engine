import {ObjectMapper} from "/engine/Renderer/Map/ObjectMapper.js";

export function Collision() {
    this.objectMapper = new ObjectMapper();

    this.collisionOrientationObject = {
        xm: true,
        xp: true,
        ym: true,
        yp: true
    }

    this.collisionMargin = 3;

    this.checkCollision = function(player, map) {
        this.collisionOrientationObject = {
            xm: true,
            xp: true,
            ym: true,
            yp: true
        }

        const collisionObjects = map.objectMapper.objectMap.collisionObjects;
        for (const collisionObject in collisionObjects) {
            const x = collisionObjects[collisionObject].x;
            const y = collisionObjects[collisionObject].y;

            // Walk left
            if (player.getX() > x - 64 && player.getX() < x + 64) {
                if (player.getY() >= y - 64 && player.getY() < y + 64) {
                    this.collisionOrientationObject.xm = false;
                }
            }

            // Walk right
            if (player.getX() + 64 >= x && player.getX() <= x) {
                if (player.getY() >= y - 64 && player.getY() < y + 64) {
                    this.collisionOrientationObject.xp = false;
                }
            }

            // Walk top
            if (player.getY() < y + (64 + this.collisionMargin) && player.getY() > y - (64 + this.collisionMargin)) {
                if (player.getX() > x - (64 - this.collisionMargin) && player.getX() < x + (64 - this.collisionMargin)) {
                    this.collisionOrientationObject.yp = false;
                }
            }

            // Walk bottom
            if (player.getY() + (64 + this.collisionMargin) > y && player.getY() < y + (64 + this.collisionMargin)) {
                if (player.getX() > x - (64 - this.collisionMargin) && player.getX() < x + (64 - this.collisionMargin)) {
                    this.collisionOrientationObject.ym = false;
                }
            }
        }
    }
}
