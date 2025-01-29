//eslint-disable-next-line no-unused-vars
class PhotographerLikes {
    constructor(medias, photographer) {
        this.medias = medias;
        this.photographer = photographer
    };

    // Fonction pour creer l'encart avec le nombre total de like du photographe
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
            <aside class="photographer_likes">
                <div class="likes_content">
                    <div class="likes_count">
                    <span>${sum}</span>
                    <em class="like_btn fas fa-heart"></em>
                    </div>
                    <span>${this.photographer.price}€/Jour</span>
                </div>
            </aside>`
         mediaContent.innerHTML = likeContent
         return likeContent
    }
}