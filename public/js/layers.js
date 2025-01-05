/**
 * Draws the background tiles on the canvas.
 * @param {Object} background - The background object containing tile ranges.
 * @param {CanvasRenderingContext2D} context - The canvas rendering context where the background will be drawn.
 * @param {SpriteSheet} sprites - The SpriteSheet instance used to draw the tiles.
 */
function drawnBackground(background, context, sprites) {
    background.ranges.forEach(([x1, x2, y1, y2]) => {
        for (let x = x1; x < x2; ++x) {
            for (let y = y1; y < y2; ++y) {
                sprites.drawTile(background.tile, context, x, y);
            }
        }
    });
}
/**
 * Creates a background layer for drawing the background tiles.
 * @param {Array} backgrounds - The array of background objects containing tile ranges.
 * @param {SpriteSheet} sprites - The SpriteSheet instance used to draw the tiles.
 * @returns {Function} A function that draws the background layer.
 */
export function createBackgroundLayer(backgrounds, sprites) {
    const buffer = document.createElement('canvas');
    buffer.width = 256;
    buffer.height = 240;

    backgrounds.forEach(background => {
        drawnBackground(background, buffer.getContext('2d'), sprites);
    });
    
    return function drawBackgroundLayer(context) {
        context.drawImage(buffer, 0, 0);
    };
}

export function createSpriteLayer(entity) {
    return function drawSpriteLayer(context) {
        entity.draw(context);
    };
}