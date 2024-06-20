export default class ModalManager {
    constructor() {
        this.modal = document.getElementById("myModal");
        this.close = document.getElementsByClassName("close")[0];
        this.close.onclick = () => {
            this.closeModal();
        };
        this.isModalOpen = false;
    }

    openModal(title, description) {
        if (this.isModalOpen) return;
        document.getElementById("modalTitle").innerHTML = title;
        document.getElementById("modalDescription").innerHTML = description;
        this.modal.classList.remove('fadeOut');
        this.modal.classList.add('fadeIn');
        this.modal.style.display = "block";
        this.isModalOpen = true;
    }

    closeModal() {
        if (!this.isModalOpen) return;
        this.modal.classList.remove('fadeIn');
        this.modal.classList.add('fadeOut');
        setTimeout(() => {
            this.isModalOpen = false;
            this.modal.style.display = "none";
        }, 600);
    }
}