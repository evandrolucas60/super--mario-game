const PRESSED = 1;// Constante para representar o estado de tecla pressionada
const RELEASED = 0;// Constante para representar o estado de tecla liberada

export default class KeyboardState {
    constructor() {
        // Armazena o estado atual de uma determinada tecla
        this.keyStates = new Map();

        // Armazena as funções de callback para um código de tecla
        this.keyMap = new Map();
    }
    // Adiciona um mapeamento de tecla para uma função de callback
    addMapping(keyCode, callback) {
        this.keyMap.set(keyCode, callback);
    }
    // Lida com eventos de teclado
    handleEvent(event) {
        const {keyCode} = event;

        if (!this.keyMap.has(keyCode)) {
            // Se a tecla não estiver mapeada, ignore o evento
            return;
        }

        event.preventDefault();// Previne o comportamento padrão do evento

        // Determina o estado da tecla (pressionada ou liberada)
        const keyState = event.type === 'keydown' ? PRESSED : RELEASED;

        if (this.keyStates.get(keyCode) === keyState) {
            // Se o estado da tecla não mudou, não faça nada
            return;
        }

        // Atualiza o estado da tecla
        this.keyStates.set(keyCode, keyState);
        console.log(this.keyStates);
        // Chama o callback associado à tecla
        this.keyMap.get(keyCode)(keyState);
    }

    listenTo(window) {
        ['keydown', 'keyup'].forEach(eventName => {
            window.addEventListener(eventName, event => {
                this.handleEvent(event);
            });
        });
    }
}