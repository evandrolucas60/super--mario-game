import Vec2 from './Math.js';

// Classe Trait para definir comportamentos que podem ser adicionados a entidades

export class Trait {
    constructor(name){
        this.NAME = name // Nome do trait
    }

    update(){
        console.warn('Unhandled update call in Trait');// Aviso se o método update não for sobrescrito
    }
}

// Classe Entity para representar objetos do jogo com posição, velocidade e traits
export default class Entity {
    constructor() {
        this.pos = new Vec2(0, 0);// Vetor de posição inicializado em (0, 0)
        this.vel = new Vec2(0, 0);// Vetor de velocidade inicializado em (0, 0)

        this.traits = [];// Array para armazenar traits
    }
    // Método para adicionar um trait à entidade
    addTrait(trait) {
        this.traits.push(trait);// Adiciona o trait ao array
        this[trait.NAME]= trait;// Adiciona o trait à entidade pelo nome para fácil acesso
    }
    // Método para atualizar a entidade e seus traits
    update(deltaTime) {
        this.traits.forEach(trait => {
            trait.update(this, deltaTime)// Atualiza cada trait com a entidade e deltaTime
        })
    }
}