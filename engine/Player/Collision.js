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

            this.collisionOrientationObject.xm = !this.canLeft(player, x, y);
            this.collisionOrientationObject.xp = !this.canRight(player, x, y);
            this.collisionOrientationObject.yp = !this.canTop(player, x, y);
            this.collisionOrientationObject.ym = !this.canBottom(player, x, y);
        }
    }

    this.canLeft = function(player, x, y) {
        return player.getX() > x - 64
            && player.getX() < x + 64
            && player.getY() >= y - 64
            && player.getY() < y + 64;
    }

    this.canRight = function(player, x, y) {
        return player.getX() + 64 >= x
            && player.getX() <= x
            && player.getY() >= y - 64
            && player.getY() < y + 64;
    }

    this.canTop = function(player, x, y) {
        return player.getY() < y + (64 + this.collisionMargin)
            && player.getY() > y - (64 + this.collisionMargin)
            && player.getX() > x - (64 - this.collisionMargin)
            && player.getX() < x + (64 - this.collisionMargin);
    }

    this.canBottom = function(player, x, y) {
        return player.getY() + (64 + this.collisionMargin) > y
            && player.getY() < y + (64 + this.collisionMargin)
            && player.getX() > x - (64 - this.collisionMargin)
            && player.getX() < x + (64 - this.collisionMargin);
    }
}
