//eslint-disable-next-line no-unused-vars
class LightBox {
    constructor(mediaElement) {
        this.mediaElement = mediaElement;
        this.mediaItems = Array.from(document.querySelectorAll('a[data-id]'));
        this.currentIndex = this.mediaItems.findIndex(item => item.dataset.id === mediaElement.dataset.id);
        this.lightboxElement = this.createLightBox();
        this.bindEvents();
        this.previouslyFocusedElement = null;
    }

    // Création de l'élément HTML ou sera envoyé notre média
    createLightBox() {
        const lightbox = document.querySelector('.lightbox');
        lightbox.setAttribute("aria-modal", "true")
        lightbox.setAttribute("role", "dialog")
        lightbox.innerHTML = `
            <div class="lightbox-content" aria-label="Media closeup view">
                <button class="close" aria-label="close dialog"><em class="btn_lightbox--close fa-solid fa-xmark"></em></button>
                <div class="lightbox-media" role="media" aria-label="Current Media">
                </div>
                <button class="prev" aria-label="previous image"><em class=" btn_lightbox fa-solid fa-chevron-left"></em></button>
                <button class="next" aria-label="next image"><em class=" btn_lightbox fa-solid fa-chevron-right"></em></button>
            </div>
        `;
        return lightbox;
    }

    bindEvents() {
        // navigation au clavier 
        document.addEventListener("keyup", (e) => {
            switch(e.key) {
                case 'Escape':
                    this.closeLightBox();
                    break;
                case 'ArrowLeft':
                    this.showPreviousMedia();
                    break;
                case 'ArrowRight':
                    this.showNextMedia();
                    break;
            };
        })
        this.lightboxElement.querySelector('.close').addEventListener('click', () => this.closeLightBox());
        this.lightboxElement.querySelector('.prev').addEventListener('click', () => this.showPreviousMedia());
        this.lightboxElement.querySelector('.next').addEventListener('click', () => this.showNextMedia());
        this.displayMedia();
    }

    trapFocus() {
        const focusableElements = this.lightboxElement.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
    
        this.lightboxElement.addEventListener('keydown', (e) => {
            const isTabPressed = (e.key === 'Tab' || e.keyCode === 9);
    
            if (!isTabPressed) {
                return;
            }
    
            if (e.shiftKey) {
                if (document.activeElement === firstElement) {
                    lastElement.focus();
                    e.preventDefault();
                }
            } else {
                if (document.activeElement === lastElement) {
                    firstElement.focus();
                    e.preventDefault();
                }
            }
        });
    }

    // Ouverture de la lightbox
    openLightBox() {
        this.previouslyFocusedElement = document.activeElement;
        this.lightboxElement.style.display = 'flex';
        this.lightboxElement.querySelector('.close').focus()
        this.displayMedia();
        this.trapFocus();
    }

    // Fermeture de la lightbox
    closeLightBox() {
        this.lightboxElement.style.display = 'none';
        if (this.previouslyFocusedElement) {
            this.previouslyFocusedElement.focus();
        }
    }

    // Affichage de l'image / vidéo
    displayMedia() {
        const currentMedia = this.mediaItems[this.currentIndex];
        const mediaType = currentMedia.querySelector('img') ? 'image' : 'video';
        const mediaSrc = currentMedia.getAttribute('href');
        const mediaTitle = currentMedia.getAttribute('title');
        const mediaContainer = this.lightboxElement.querySelector('.lightbox-media');
        // On envoi la classe img ou video en fonction du type de media
        mediaContainer.innerHTML = mediaType === 'image' 
            ? `<img class="lightbox_image" src="${mediaSrc}" alt="${mediaTitle}">
                <figcaption>${mediaTitle}</figcaption>` 
            : `<video controls><source src="${mediaSrc}" type="video/mp4"></video>
                <figcaption>${mediaTitle}</figcaption>`;
    }

    // Afficher l'élement suivant 
    showPreviousMedia() {
        // faire une boucle des medias
        this.currentIndex = (this.currentIndex - 1 + this.mediaItems.length) % this.mediaItems.length;
        this.displayMedia();
    }

    // Afficher l'élément précédent
    showNextMedia() {
        this.currentIndex = (this.currentIndex + 1) % this.mediaItems.length;
        this.displayMedia();
    }
}