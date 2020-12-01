import {MapParser} from "/engine/Renderer/Map/Parser.js";
import {MapRenderer} from "/engine/Renderer/Map/Renderer.js";

export function renderMap(mapName) {
    const mapParser = new MapParser();
    const mapRenderer = new MapRenderer(mapParser.parse("test"), mapName);

    return mapRenderer.render();
}
