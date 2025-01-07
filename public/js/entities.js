import Entity from './Entity.js';
import Velocity from './traits/Velocity.js';
import Jump from './traits/jump.js';
import { loadMarioSprites } from './sprites.js';

// Atualiza cada trait com a entidade e deltaTime
export function createMario() {
    return loadMarioSprites().then(sprite => {
        const mario = new Entity();// Cria uma nova instância de Entity para Mario
       
        mario.addTrait(new Velocity());// Adiciona o trait de velocidade a Mario
        mario.addTrait(new Jump());// Adiciona o trait de pulo a Mario
        
        // Define o método draw para desenhar Mario no contexto do canvas
        mario.draw = function drawMario(context) {
            sprite.draw('idle', context, this.pos.x, this.pos.y);// Desenha o sprite 'idle' de Mario na posição atual
        }

        return mario;// Retorna a instância de Mario
    });
}
