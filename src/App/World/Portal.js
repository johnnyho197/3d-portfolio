import App from "../App.js";
import * as THREE from "three";
import ModalManager from "../UI/ModalManager.js";

export default class Portal {
    constructor(portalMesh, modalInfo) {
        this.app = new App();
        this.modalInfo = modalInfo;
        this.portalMesh = portalMesh;
        this.modalManager = new ModalManager();

        this.portalNearMaterial = new THREE.MeshBasicMaterial({
            color: 0xffffff,
            emissive: 0xffffff,
            emissiveIntensity: 2,
            transparent: true,
            opacity: 0.8
        });

        this.portalFarMaterial = new THREE.MeshBasicMaterial({
            color: 0xff0000,
            emissive: 0xff0000,
            emissiveIntensity: 2,
            transparent: true,
            opacity: 0.8
        });

        this.portalMesh.material = this.portalFarMaterial;

        this.prevIsNear = false;
    }

    loop(){
        this.character = this.app.world.character.instance;
        if (this.character) {
            const portalPosition = new THREE.Vector3()
            this.portalMesh.getWorldPosition(portalPosition)
            const distance = this.character.position.distanceTo(portalPosition)
            const isNear = distance < 1.5
            if (isNear) {
                if (this.prevIsNear) return
                this.modalManager.openModal(this.modalInfo.title, this.modalInfo.description)
                this.portalMesh.material = this.portalNearMaterial;
                this.prevIsNear = true
            } else {
                if (!this.prevIsNear) return
                this.modalManager.closeModal()
                this.portalMesh.material = this.portalFarMaterial;
                this.prevIsNear = false
            }
        }
    }
}