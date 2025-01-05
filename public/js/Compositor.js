export default class Compositor {
    constructor() {
        this.layers = []; // Array to store the layers to be drawn
    }

    draw(context) {
        this.layers.forEach(layer => {
            layer(context); // Call the draw function of each layer
        });
    }
}