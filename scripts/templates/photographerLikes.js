class PhotographerLike {
    constructor(likes, photographer) {
        this.likes = likes;
        this.photographer = photographer
    };


    createPhotographerLikes() {
        const mediaContent = document.querySelector(".likes")
        const likeContent = `
            <div class="photographer_likes">
                <div class="likes_content">
                    <div class="photographer_medias--infos">
                        <p>${this.medias.likes}</p>
                    </div>
                </div>
            </div>`
         mediaContent.innerHTML = likeContent
    }
}