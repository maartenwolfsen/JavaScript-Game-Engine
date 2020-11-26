export function ObjectMapper() {
    this.objectMap = {
        collisionObjects: {},
        interactiveObjects: {}
    };

    this.collisionObjectsCounter = 0;

    this.addCollisionObject = function(x, y, width, height) {
        this.objectMap.collisionObjects[this.collisionObjectsCounter] =
            this.createObject(x, y, width, height);
        this.collisionObjectsCounter++;
    }

    this.createObject = function(x, y, width, height) {
        return {
            x: x,
            y: y,
            width: width,
            height: height
        }
    }
}
