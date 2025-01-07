// Classe Compositor para gerenciar e desenhar camadas
export default class Compositor {
    constructor() {
        this.layers = []; // Array para armazenar as camadas a serem desenhadasdrawn
    }
    // Método para desenhar todas as camadas
    draw(context) {
        this.layers.forEach(layer => {
            layer(context); // Chama a função de desenho de cada camada
        });
    }
}