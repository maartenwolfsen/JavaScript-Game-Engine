export function MapRenderer(mapData, mapName) {
    this.mapSpriteSheet = new Image();
    this.mapSpriteSheet.src = "/assets/sprite-sheets/maps/map_" + mapName + ".png";

    this.render = function() {
        if (!mapData) return;

        let canvasPos = {
            x: 0,
            y: 0
        };
        let mapping = {
            x: 0,
            y: 0
        };

        for (let c of mapData) {
            switch (c) {
                case "x":
                default:
                    mapping.x = 3;
                    mapping.y = 1;
                    break;
                case "c":
                    mapping.y = 0;
                    mapping.x = 1;
                    break;
                case "e":
                    mapping.x = 1;
                    mapping.y = 2;
                    break;
                case "\n":
                    canvasPos.x = 0;
                    canvasPos.y++;
                    break;
            }

            game.drawImage(
                this.mapSpriteSheet,
                16 * mapping.x,
                16 * mapping.y,
                16,
                16,
                64 * canvasPos.x,
                64 * canvasPos.y,
                64,
                64
            );

            canvasPos.x++;
        }

        return mapData;
    }
}
