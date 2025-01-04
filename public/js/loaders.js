/**
 * Loads an image from the specified URL.
 * @param {string} url - The URL of the image to load.
 * @returns {Promise<HTMLImageElement>} A promise that resolves with the loaded image element.
 */

export function loadImage(url) {
    return new Promise(resolve => {
      const image = new Image();
      image.addEventListener('load', () => resolve(image));
      image.src = url;
    });
  }

  /**
 * Loads the level data from a JSON file.
 * @param {string} name - The name of the level to load.
 * @returns {Promise<Object>} A promise that resolves with the level data.
 */
  export function loadLevel(name) {
    return fetch(`/levels/${name}.json`)
      .then(r => r.json());
  }