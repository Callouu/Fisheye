class PhotographerImage {
    constructor(medias, photographer) {
        this.medias = medias;
        this.photographer = photographer
    };


    createPhotographerImage() {
        const mediaContent = document.querySelector(".medias")
        const imageContent = `
            <div class="photographer_medias">
                <div class="media_content">
                    <img class="photographer_image" src="./assets/${this.photographer.name}/${this.medias.image}" alt="">
                    <div class="photographer_medias--infos">
                        <h2>${this.medias.title}</h2>
                        <p>${this.medias.likes}</p>
                    </div>
                </div>
            </div>`
         mediaContent.innerHTML += imageContent
    }
    // createPhotographerImage() {
    //     const mediaContent = document.querySelector(".medias")
    //     //const images = []
    //     for(let i=0; i < this.medias.length; i++) {
    //         const result = this.medias[i]
    //         console.log(result)
    //         const imageContent = `
    //         <div class="photographer_medias">
    //             <div class="media_content">
    //                 <img class="photographer_image" src="./assets/${this.photographer.name}/${result.image}" alt="">
    //                 <div class="photographer_medias--infos">
    //                     <h2>${result.title}</h2>
    //                     <p>${result.likes}</p>
    //                 </div>
    //             </div>
    //         </div>`
            
    //         // const videoContent = `
    //         // <div class="photographer_medias">
    //         //     <div class="media_content">
    //         //     <video class="photographer_video" controls>
    //         //             <source src="./assets/${this.photographer.name}/${result.video}" type="video/mp4">
    //         //         </video>
    //         //         <div class="photographer_medias--infos">
    //         //             <h2>${result.title}</h2>
    //         //             <p>${result.likes}</p>
    //         //         </div>
    //         //     </div>
    //         // </div>
    //         // `
    //         // const MediaFilter = result.image ? imageContent : videoContent
    //         // if(data === this.medias) {
    //         //     //images.push(result)
    //         //     mediaContent.innerHTML += MediaFilter
    //         // }
    //         mediaContent.innerHTML += imageContent
    //     }
    //     //return images
    // };
};
