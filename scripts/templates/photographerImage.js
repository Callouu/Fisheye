//eslint-disable-next-line no-unused-vars
class PhotographerImage {
    constructor(medias, photographer) {
        this.medias = medias;
        this.photographer = photographer
        this.likedClass = this.medias["is_liked"] == true ? 'liked' : 'nolike'
    };

    // Fonction pour creer la carte image
    createPhotographerImage() {
        const imageContent = `
            <article class="photographer_medias" id="${this.medias.id}" data-titre="${this.medias.title}" data-date="${this.medias.date}" data-likes="${this.medias.likes}">
                <a href="./assets/${this.photographer.name}/${this.medias.image}" class="link_lightbox" aria-label="ouvre lightbox" data-id="${this.medias.id}" title="${this.medias.title}">
                    <img class="photographer_image" src="./assets/${this.photographer.name}/${this.medias.image}" alt="${this.medias.title}">
                </a> 
                <figcaption class="photographer_medias--infos">
                    <h2>${this.medias.title}</h2>
                    <div class="like_info" role="group">
                        <span class="count">${this.medias.likes}</span>
                        <button onclick="profile.like(${this.medias.id})" class="like_btn" aria-label="like button" id="${this.medias.id}">
                        <span class="like_btn--icon ${this.likedClass}" aria-hidden="true">
                        <em class="like_icon fas fa-heart"></em></span>
                        </button>
                    </div>
                </figcaption>
            </article>`
         return imageContent
    }
};
