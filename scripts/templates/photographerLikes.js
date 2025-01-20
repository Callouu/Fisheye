class PhotographerLikes {
    constructor(medias, photographer) {
        this.medias = medias;
        this.photographer = photographer
    };


    createPhotographerLikes() {
        const mediaContent = document.querySelector(".likes")
        let sum = 0
        // on parcours la liste des medias
        for (let i = 0; i < this.medias.length; i++) {
          const result = this.medias[i];
          //on additionne toute les datas des likes
          sum += result.likes;
        }
        const likeContent = `
            <div class="photographer_likes">
                <div class="likes_content">
                        <span>${sum}</span>
                        <span>${this.photographer.price}€/Jour</span>
                </div>
            </div>`
         mediaContent.innerHTML = likeContent
    }
}