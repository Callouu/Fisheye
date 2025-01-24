class PhotographerImage {
    constructor(medias, photographer) {
        this.medias = medias;
        this.photographer = photographer
    };


    createPhotographerImage() {
        //const mediaContent = document.querySelector(".medias")
        const imageContent = `
            <div class="photographer_medias" id="${this.medias.id}" data-titre="${this.medias.title}" data-date="${this.medias.date}" data-likes="${this.medias.likes}">
                <a href="#" class="link_lightbox" aria-label="open lightbox">
                    <img class="photographer_image" src="./assets/${this.photographer.name}/${this.medias.image}" alt="image">
                </a> 
                <figcaption class="photographer_medias--infos">
                    <h2>${this.medias.title}</h2>
                    <div class="like_info" role="group" aria-label="like numbers and like button">
                        <span class="count">${this.medias.likes}</span>
                        <button onclick="profile.like(${this.medias.id})" class="like_btn" aria-label="like" id="${this.medias.id}">
                        <span class="like_btn--icon fas fa-heart" aria-hidden="true"></span>
                        </button>
                    </div>
                </figcaption>
            </div>`
        //  mediaContent.innerHTML += imageContent
         return imageContent
    }
};
