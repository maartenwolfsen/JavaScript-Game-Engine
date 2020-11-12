export function MapParser() {
    let mapPath = "/assets/Map";

    this.parse = function(map) {
        if (map === mapPath + "/" + map + ".Map") return null;

        mapPath += "/" + map + ".Map";

        return this.readFile().then();
    }

    this.readFile = async function() {
        const response = await fetch(mapPath, {
            method: 'GET',
            mode: 'cors',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/text'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer'
        });

        return response.text();
    }
}
