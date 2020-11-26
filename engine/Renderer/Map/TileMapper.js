function TileMapper() {
    this.map = {
        "x": "grass",
        "c": "rock",
        "e": "computer"
    }

    this.translate = function(tile) {
        return this.map[tile];
    }
}