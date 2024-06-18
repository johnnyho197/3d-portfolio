import * as THREE from "three";
import App from "../App.js";

export default class SoundManager {
    constructor() {
        this.listener = new THREE.AudioListener();
        this.app = new App();
        this.app.camera.instance.add(this.listener);
        this.sounds = {};
    }

    loadSound(name, filePath) {
        const audioLoader = new THREE.AudioLoader();
        const sound = new THREE.Audio(this.listener);

        audioLoader.load(filePath, (buffer) => {
            sound.setBuffer(buffer);
            sound.setLoop(false);
            sound.setVolume(0.5);
            this.sounds[name] = sound;
        });
    }

    playSound(name) {
        this.sounds[name].play();
    }

    stopSound(name) {
        this.sounds[name].stop();
    }
}