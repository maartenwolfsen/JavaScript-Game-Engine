export function MapRenderer(mapData) {
    this.render = function() {
        if (!mapData) return;

        console.log(mapData);

        return mapData;
    }
}
