function MapParser() {
    let mapPath = "assets/map";

    this.parse = function(map) {
        if (map === mapPath + "/" + map + ".map") return null;

        mapPath += "/" + map + ".map";

        return this.readFile();
    }

    this.readFile = function() {
        fetch(mapPath)
            .then(response => response.text())
            .then(mapData => {
                return mapData
            })
            .catch(function(error) {
                console.log('Looks like there was a problem: \n', error);
            });
    }
}