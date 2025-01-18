class PhotographerMedias {
    constructor(medias, photographer) {
        this.medias = medias;
        this.photographer = photographer
    };

    createPhotographerMedias(image) {
        const mediaContent = document.querySelector(".medias")
        const images = []
        for(let i=0; i < this.medias.length; i++) {
            const result = this.medias[i]
            console.log(result)
            const imageContent = `
            <div class="photographer_medias">
                <div class="media_content">
                    <img class="photographer_image" src="./assets/${this.photographer.name}/${result.image}" alt="">
                    <div class="photographer_medias--infos">
                        <h2>${result.title}</h2>
                        <p>${result.likes}</p>
                    </div>
                </div>
            </div>`
            if(image === this.medias) {
                //images.push(result)
                mediaContent.innerHTML += imageContent
            }
        }
        return images
    };
};
