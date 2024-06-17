import * as THREE from 'three';

import App from '../App';
import {inputStore} from "../Utils/Store.js";

export default class AnimationController {
    constructor() {
        this.app = new App();
        this.scene = this.app.scene;
        this.avatar = this.app.world.character.avatar;
        inputStore.subscribe((input) => this.onInput(input))

        this.instantiatedAnimations();
    }

    instantiatedAnimations() {
        this.mixer = new THREE.AnimationMixer(this.avatar.scene)
        this.animations = new Map();
        this.avatar.animations.forEach((animation) => {
            this.animations.set(animation.name, this.mixer.clipAction(animation))
        })

        this.currentAction = this.animations.get('idle')

        this.currentAction.play()
    }

    playAnimation(animationName) {
        if (this.currentAction === this.animations.get(animationName)) return
        const action = this.animations.get(animationName)
        action.reset()
        action.play()
        action.crossFadeFrom(this.currentAction, 0.3, true)
        this.currentAction = action
    }

    onInput(input) {
        if (input.forward || input.backward || input.left || input.right) {
            this.playAnimation('run')
        } else {
            this.playAnimation('idle')
        }
    }
    loop(deltaTime) {
        this.mixer.update(deltaTime)
    }
}