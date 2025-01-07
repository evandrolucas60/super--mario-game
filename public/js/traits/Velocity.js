import { Trait } from '../Entity.js';

// Classe Velocity que estende Trait para adicionar comportamento de velocidade
export default class Velocity extends Trait {
    constructor() {
        super('velocity');// Chama o construtor da classe base Trait com o nome 'velocity'
    }
    // Método update para atualizar a posição da entidade com base na velocidade
    update(entity, deltaTime) {
        entity.pos.x += entity.vel.x * deltaTime;// Move a entidade horizontalmente com base na velocidade e deltaTime
        entity.pos.y += entity.vel.y * deltaTime;// Move a entidade verticalmente com base na velocidade e deltaTime
    }
}