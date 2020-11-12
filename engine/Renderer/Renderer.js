import {MapParser} from "/engine/Renderer/Map/Parser.js";
import {MapRenderer} from "/engine/Renderer/Map/Renderer.js";

export function renderMap() {
    const mapParser = new MapParser();
    const mapRenderer = new MapRenderer();

    mapParser.parse("test").then(data => {
        mapRenderer.render(data);
    });
}
