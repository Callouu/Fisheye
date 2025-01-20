class Profil {
    constructor() {
        this.dataApi = new PhotographerApi("./data/photographers.json");
        const url = new URLSearchParams(document.location.search);
        this.id = parseInt(url.get("id"));
    }

    async main() {
        const photographer = await this.dataApi.getPhotographer(this.id);
        const profileHeader = new PhotographerHeader(photographer, this.id);
        // Si le photographe n'existe pas alors afficher erreur
        if(photographer == null) {
            profileHeader.createErrorPhotographer();
        } else { // Si il existe
            // Afficher le header 
            profileHeader.createPhotographerHeader()
            // Recuperer les medias du photographe
            const medias = await this.dataApi.getMediasFromPhotographer(this.id);

            // Afficher le carousel
            //const profileMedias = new PhotographerImage(medias, photographer); 
            //profileMedias.createPhotographerMedias(medias);  
            // Parcours les medias du photographe pour chercher si c'est une image ou une video
            medias.map(media => new MediaFactory(media))
            .forEach(media => {
                if("image" in media){
                    let ImageMedias = new PhotographerImage(media, photographer); 
                    ImageMedias.createPhotographerImage(); 
                } else {
                    let VideoMedias = new PhotographerVideo(media, photographer); 
                    VideoMedias.createPhotographerVideo(); 
                }
            })

            // Affiche les likes
            const profileLikes = new PhotographerLikes(medias, photographer)
            profileLikes.createPhotographerLikes()
        }
    }
}

const profile = new Profil();
profile.main();