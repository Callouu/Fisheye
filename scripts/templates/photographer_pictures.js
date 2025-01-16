class PhotographerPictures {
    constructor(media, photographer) {
        this.media = media;
        this.photographer = photographer
    };

    createPhotographerMedias() {
        const about = `
            <div class="photographer_profile__images">
                 <img class="photographer_image" src="assets/images/${this.media.image}" alt=""></img>
             </div>
             `
        return about
    };
};
