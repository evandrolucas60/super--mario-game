export default class Timer {
    constructor(deltaTime = 1 / 60) {
        let accumulatedTime = 0;// Accumulated time since the last update
        let lastTime = 0; // Timestamp of the last frame

        // Draw the mario sprite
        this.updateProxy = (time) => {
            accumulatedTime += (time - lastTime) / 1000;// Calculate the time difference between the current and last frame
            while (accumulatedTime > deltaTime) {
                this.update(deltaTime);// Update the game state
                accumulatedTime -= deltaTime;// Subtract the time step from the accumulated time
            }
            lastTime = time;// Update the last frame timestamp
            
            this.enqueue();// Schedule the next frame update
        }
    }

    enqueue() {
        requestAnimationFrame(this.updateProxy);// Schedule the next frame update
    }

    start() {
        this.enqueue();// Schedule the first frame update
    }
}