class LightBox {
    constructor(mediaElement, photographer) {
        this.mediaElement = mediaElement;
        this.photographer = photographer;
        this.mediaItems = Array.from(document.querySelectorAll('a[data-id]'));
        this.currentIndex = this.mediaItems.findIndex(item => item.dataset.id === mediaElement.dataset.id);
        this.lightboxElement = this.createLightBox();
        this.bindEvents();
    }

    createLightBox() {
        const lightbox = document.createElement('div');
        lightbox.classList.add('lightbox');
        lightbox.innerHTML = `
            <div class="lightbox-content">
                <span class="close"><img src="assets/icons/close.svg" alt="close"></span>
                <div class="lightbox-media"></div>
                <button class="prev"><i class="fa-solid fa-arrow-left"></i></button>
                <button class="next"><i class="fa-solid fa-arrow-right"></i></button>
            </div>
        `;
        document.body.appendChild(lightbox);
        return lightbox;
    }

    bindEvents() {
        this.lightboxElement.querySelector('.close').addEventListener('click', () => this.closeLightBox());
        this.lightboxElement.querySelector('.prev').addEventListener('click', () => this.showPreviousMedia());
        this.lightboxElement.querySelector('.next').addEventListener('click', () => this.showNextMedia());
        this.displayMedia();
    }

    openLightBox() {
        this.lightboxElement.style.display = 'block';
        this.displayMedia();
    }

    closeLightBox() {
        this.lightboxElement.style.display = 'none';
    }

    displayMedia() {
        const currentMedia = this.mediaItems[this.currentIndex];
        const mediaType = currentMedia.querySelector('img') ? 'image' : 'video';
        const mediaSrc = currentMedia.getAttribute('href');

        const mediaContainer = this.lightboxElement.querySelector('.lightbox-media');
        mediaContainer.innerHTML = mediaType === 'image' 
            ? `<img class="lightbox_image" src="${mediaSrc}" alt="${currentMedia.dataset.title}">` 
            : `<video controls><source src="${mediaSrc}" type="video/mp4"></video>`;
    }

    showPreviousMedia() {
        this.currentIndex = (this.currentIndex - 1 + this.mediaItems.length) % this.mediaItems.length;
        this.displayMedia();
    }

    showNextMedia() {
        this.currentIndex = (this.currentIndex + 1) % this.mediaItems.length;
        this.displayMedia();
    }
}