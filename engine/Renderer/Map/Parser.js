import {File} from "/engine/Core/File.js";

// TODO: Use actual map
export function MapParser() {
    let mapPath = "/assets/map";

    this.parse = function(map) {
        if (map === mapPath + "/" + map + ".map") return null;

        mapPath += "/" + map + ".map";

        return "xxxxxxxxeexxxxxxxxxxeexx\n" +
            "xxxxxxxxxxxxxxxxxxxxxx\n" +
            "xxxexxxxxxxxxxexxxxxxx\n" +
            "xxxxxxxxxxxxxxxxxxxxxx\n" +
            "xxxxxxxexxcxxxxxxxexxx\n" +
            "xxxxxxxxxxxxxxxxxxxxxx" +
            "xxxxxxxxexxxxxxxxxxxeexx\n" +
            "xxxxxxxxxxxxxxxxxxxxxx\n" +
            "xxxexxxxxxxxxxexxxxxxx\n" +
            "xxxxxxxxxxxcxxxxxxxxxx\n" +
            "xxxxxxxexxxxxxxxxxexxx\n" +
            "xxxxxxxxxxxxxxxxxxxxxx\n" +
            "xxxxxxxxxxxxxxxxxxexxx\n" +
            "xxxxxxxxxxxxxxxxxxxxxx";
    }
}
