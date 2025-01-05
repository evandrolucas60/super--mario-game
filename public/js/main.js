import { loadLevel } from './loaders.js';
import { createBackgroundLayer } from './layers.js';
import { loadMarioSprites, loadBackgroundSprites } from './sprites.js';
import Compositor from './Compositor.js';

// Get the canvas element and its 2D rendering context
const canvas = document.getElementById('screen');
const context = canvas.getContext('2d');

/**
 * Creates a sprite layer for drawing a sprite at a given position.
 * @param {SpriteSheet} sprite - The SpriteSheet instance containing the sprite to draw.
 * @param {Object} pos - The position object with x and y coordinates.
 * @returns {Function} A function that draws the sprite layer.
 */
function createSpriteLayer(sprite, pos) {
    return function drawSpriteLayer(context) {
        for (let i = 0; i < 20; ++i) {
            sprite.draw('idle', context, pos.x + i * 16, pos.y);    
        }
    };
}

// Load the background sprites and the level data
Promise.all([
    loadMarioSprites(), // Load Mario sprites
    loadBackgroundSprites(),// Load background sprites// Load background sprites
    loadLevel('1-1')// Load level data for level '1-1'
]).then(([marioSprites,backgroundSprites, level]) => {
    const comp = new Compositor(); // Create a new Compositor instance
    const backgroundLayer = createBackgroundLayer(level.backgrounds, backgroundSprites);// Create a background layer
    comp.layers.push(backgroundLayer);// Add the background layer to the compositor

    const pos = {
        x: 0,// Initial x-coordinate of Mario
        y: 0// Initial y-coordinate of Mario
    };

    const spriteLayer = createSpriteLayer(marioSprites, pos);// Create a sprite layer for Mario
    comp.layers.push(spriteLayer);// Add the sprite layer to the compositor

    // Draw the mario sprite
    function update() {
        comp.draw(context);// Draw all layers in the compositor
        marioSprites.draw('idle', context, pos.x, pos.y);// Draw the 'idle' sprite at coordinates (64, 64)
        pos.x += 2;// Move the sprite 2 pixels to the right
        pos.y += 2;// Move the sprite 2 pixels down
        requestAnimationFrame(update);// Schedule the next frame update
    }
    update();
});