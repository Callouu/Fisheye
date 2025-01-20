class PhotographerVideo {
    constructor(medias, photographer) {
        this.medias = medias;
        this.photographer = photographer
    };


    createPhotographerVideo() {
        const mediaContent = document.querySelector(".medias")
        const videoContent = `
            <div class="photographer_medias" id="${this.medias.id}" data-titre="${this.medias.title}" data-date="${this.medias.date}" data-likes="${this.medias.likes}">
                <a href="#" class="lightbox" aria-label="ouvre lightbox">
                    <video class="photographer_video" controls>
                         <source src="./assets/${this.photographer.name}/${this.medias.video}" type="video/mp4">
                     </video>
                </a>   
                <div class="photographer_medias--infos">
                    <h2>${this.medias.title}</h2>
                    <div class="like_btn">
                        <p>${this.medias.likes}</p>
                        <i class="like__btn--fill fas fa-heart fa-2x"></i>
                    </div>
                </div>
            </div>`
         mediaContent.innerHTML += videoContent
         return videoContent
    }
}

//     createPhotographerVideo() {
//         const mediaContent = document.querySelector(".medias")
//         //const images = []
//         for(let i=0; i < this.medias.length; i++) {
//             const result = this.medias[i]
//             console.log(result)
//             const videoContent = `
//             <div class="photographer_medias">
//                 <div class="media_content">
//                 <video class="photographer_video" controls>
//                         <source src="./assets/${this.photographer.name}/${result.video}" type="video/mp4">
//                     </video>
//                     <div class="photographer_medias--infos">
//                         <h2>${result.title}</h2>
//                         <p>${result.likes}</p>
//                     </div>
//                 </div>
//             </div>
//             `
//                 mediaContent.innerHTML += videoContent

//         }
//     };
// };
