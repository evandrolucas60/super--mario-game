import { loadImage } from './loaders.js';
import SpriteSheet from './SpriteSheet.js';

// Function to load the mario sprites
export function loadMarioSprites() {
    return loadImage('/img/characters.gif')
        .then(image => {
            const sprites = new SpriteSheet(image, 16, 16);
            sprites.define('idle', 276, 44, 16, 16);
            return sprites;
        });
}

// Function to load the background sprites
export function loadBackgroundSprites() {
    return loadImage('/img/tiles.png')
        .then(image => {
            const sprites = new SpriteSheet(image, 16, 16);// Create a new SpriteSheet instance with the loaded image
            sprites.defineTile('ground', 0, 0);// Define the 'ground' sprite
            sprites.defineTile('sky', 3, 23);// Define the 'sky' sprite
            return sprites;// Return the SpriteSheet instance
        });
}