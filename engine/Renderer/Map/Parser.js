import {File} from "/engine/Core/File.js";

// TODO: Use actual map
export function MapParser() {
    let mapPath = "/assets/map";

    this.parse = function(map) {
        if (map === mapPath + "/" + map + ".map") return null;

        mapPath += "/" + map + ".map";

        return "xxxxxcxxxxx\n" +
            "xxcxxxxxxxx\n" +
            "xxxxxxxxcxx\n" +
            "xxxxxxcxxxx\n" +
            "xxxxxxxxxxc\n" +
            "xxxxcxxxxxx";
    }
}
