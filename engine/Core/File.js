export function File(file) {
    this.readFile = function() {
        return fetch(file).then(text => text.text());
    }
}