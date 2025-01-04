import SpriteSheet from './SpriteSheet.js';
import {loadImage, loadLevel} from './loaders.js';

function drawnBackground(background, context, sprites) {
    background.ranges.forEach(([x1, x2, y1, y2]) => {
        for (let x = x1; x < x2; ++x) {
            for (let y = y1; y < y2; ++y) {
                sprites.drawTile(background.tile, context, x, y);
            }
        }
    });
}

  // Get the canvas element and its 2D rendering context
  const canvas = document.getElementById('screen');
  const context = canvas.getContext('2d');
  
  // Draw a filled rectangle on the canvas
  context.fillRect(0, 0, 50, 50);
  
  // Load the sprite sheet image
  loadImage('/img/tiles.png').then(image => {
    // Create a new SpriteSheet instance with the loaded image
    const sprites = new SpriteSheet(image, 16 , 16);
    // Define a sprite named 'ground' at position (0, 1) in the sprite sheet
    sprites.define('ground', 0, 0);
    sprites.define('sky', 3, 23);
    
    // Load the level data for level '1-1'
    loadLevel('1-1')
    .then(level => { 
        // Draw the first background layer of the level// Draw the first background layer of the level
        drawnBackground(level.backgrounds[0], context, sprites);
        // Draw the second background layer of the level// Draw the second background layer of the level
        drawnBackground(level.backgrounds[1], context, sprites);   
    }) 
  });