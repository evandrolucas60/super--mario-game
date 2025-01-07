import {Trait} from '../Entity.js';

// Move a entidade verticalmente com base na velocidade e deltaTime
export default class Jump extends Trait {
    constructor() {
        super('jump');// Chama o construtor da classe base Trait com o nome 'jump'

        this.duration = 0.5;// Duração do pulo em segundos
        this.engageTime = 0;// Tempo de engajamento do pulo

        this.velocity = 200;// Velocidade do pulo
    }

    // Método para iniciar o pulo
    start() {
        this.engageTime = this.duration;// Define o tempo de engajamento para a duração do pulo
    }

    // Método para cancelar o pulo
    cancel() {
        this.engageTime = 0;// Define o tempo de engajamento para 0, cancelando o pulo
    }

    // Método update para atualizar a entidade com base no pulo
    update(entity, deltaTime) {
        if (this.engageTime > 0) {
            entity.vel.y = -this.velocity;// Aplica a velocidade do pulo na direção vertical
            this.engageTime -= deltaTime;// Reduz o tempo de engajamento com o tempo decorrido
        }
    }
}
