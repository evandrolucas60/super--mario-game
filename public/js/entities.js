import Entity from './Entity.js';
import { loadMarioSprites } from './sprites.js';

export function createMario() {
    return loadMarioSprites().then(sprite => {
        const mario = new Entity();// Create a new Entity instance for Mario

        mario.draw = function drawMario(context) {
            sprite.draw('idle', context, this.pos.x, this.pos.y);
        }

        mario.update = function updateMario(deltaTime) {
            this.pos.x += this.vel.x * deltaTime;// Move Mario horizontally
            this.pos.y += this.vel.y * deltaTime;// Move Mario vertically
        }

        return mario;
    });
}
