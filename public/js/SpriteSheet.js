
export default class SpriteSheet {
    /**
     * Initializes a new instance of the SpriteSheet class.
     * @param {HTMLImageElement} image - The image element containing the sprite sheet.
     * @param {number} width - The width of each individual sprite in the sprite sheet.
     * @param {number} height - The height of each individual sprite in the sprite sheet.
     */

    constructor(image, width, height) {
        this.image = image;
        this.width = width;
        this.height = height;
        this.tiles = new Map();
    }

    /**
     * Defines a sprite by extracting it from the sprite sheet.
     * @param {string} name - The name to assign to the defined sprite.
     * @param {number} x - The x-coordinate (in sprites) of the sprite within the sprite sheet.
     * @param {number} y - The y-coordinate (in sprites) of the sprite within the sprite sheet.
     */
    define(name, x, y) {
        const buffer = document.createElement('canvas');
        buffer.width = this.width;
        buffer.height = this.height;
        buffer
            .getContext('2d')
            .drawImage(
                this.image,
                x * this.width,
                y * this.height,
                this.width,
                this.height,
                0,
                0,
                this.width,
                this.height);
        this.tiles.set(name, buffer);
    }

    /**
     * Draws the specified sprite onto the given canvas context.
     * @param {string} name - The name of the sprite to draw.
     * @param {CanvasRenderingContext2D} context - The canvas rendering context where the sprite will be drawn.
     * @param {number} x - The x-coordinate on the canvas where the sprite will be drawn.
     * @param {number} y - The y-coordinate on the canvas where the sprite will be drawn.
     */
    draw(name, context, x, y) {
        const buffer = this.tiles.get(name);
        context.drawImage(buffer, x, y);
    }

    /**
     * Draws the specified sprite onto the given canvas context at tile coordinates.
     * @param {string} name - The name of the sprite to draw.
     * @param {CanvasRenderingContext2D} context - The canvas rendering context where the sprite will be drawn.
     * @param {number} x - The x-coordinate (in tiles) on the canvas where the sprite will be drawn.
     * @param {number} y - The y-coordinate (in tiles) on the canvas where the sprite will be drawn.
     */
    drawTile(name, context, x, y) {
        this.draw(name, context, x * this.width, y * this.height);
    }
}