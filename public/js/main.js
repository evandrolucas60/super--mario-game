import { loadLevel } from './loaders.js';
import { createBackgroundLayer, createSpriteLayer } from './layers.js';
import { createMario } from './entities.js';
import { loadBackgroundSprites } from './sprites.js';
import Compositor from './Compositor.js';
import Timer from './Timer.js';

import Keyboard from './KeyboardState.js';

// Get the canvas element and its 2D rendering context
const canvas = document.getElementById('screen');
const context = canvas.getContext('2d');

// Load the background sprites and the level data
Promise.all([
    createMario(), // Load Mario sprites
    loadBackgroundSprites(),// Load background sprites
    loadLevel('1-1')// Load level data for level '1-1'
]).then(([mario, backgroundSprites, level]) => {
    const comp = new Compositor(); // Create a new Compositor instance

    const backgroundLayer = createBackgroundLayer(level.backgrounds, backgroundSprites);// Create a background layer
    comp.layers.push(backgroundLayer);// Add the background layer to the compositor

    const gravity = 30;// Set the gravity value
    mario.pos.set(64, 180);// Set the initial position of Mario

    const SPACE = 32;
    const input = new Keyboard();
    input.addMapping(SPACE, keyState => {
        if (keyState) {
            mario.jump.start();
        } else {
            mario.jump.cancel();
        }
        console.log(keyState);
    });
    input.listenTo(window);

    const spriteLayer = createSpriteLayer(mario);// Create a sprite layer for Mario
    comp.layers.push(spriteLayer);// Add the sprite layer to the compositor

    const timer = new Timer(1 / 60);// Create a new Timer instance

    timer.update = function update(deltaTime) {
        comp.draw(context);
        mario.update(deltaTime);
        mario.vel.y += gravity;
    }

    timer.start();
});