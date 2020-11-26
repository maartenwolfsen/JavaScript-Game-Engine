import {File} from "/engine/Core/File.js";

// TODO: Use actual map
export function MapParser() {
    let mapPath = "/assets/map";

    this.parse = function(map) {
        if (map === mapPath + "/" + map + ".map") return null;

        mapPath += "/" + map + ".map";

        return "xxxxxcxxeexxxxxxxcxxeexx\n" +
            "xxcxxxxxxxxxxcxxxxxxxx\n" +
            "xxxexxxxcxxxxxexxxxcxx\n" +
            "xxxxxxcxxxxxxxxxxcxxxx\n" +
            "xxxxxxxexxcxxxxxxxexxc\n" +
            "xxxxcxxxxxxxxxxcxxxxxx" +
            "xxxxxcxxeexxxxxxxcxxeexx\n" +
            "xxcxxxxxxxxxxcxxxxxxxx\n" +
            "xxxexxxxcxxxxxexxxxcxx\n" +
            "xxxxxxcxxxxxxxxxxcxxxx\n" +
            "xxxxxxxexxcxxxxxxxexxc\n" +
            "xxxxxxcxxxxxxxxxxcxxxx\n" +
            "xxxxxxxexxcxxxxxxxexxc\n" +
            "xxxxcxxxxxxxxxxcxxxxxx";
    }
}
