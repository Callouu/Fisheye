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
            const profileMedias = new PhotographerMedias(medias, photographer); 
            profileMedias.createPhotographerMedias(medias);  



        }

        // NOT OK 
        // this.profilPhotographe.append(profileHeader.createPhotographerHeader());
        // photographerData
        // .map(photographer => new Photographer(photographer))
        // .forEach(photographer => { 
        //     const profileHeader = new PhotographerHeader(photographer, this.id);      
        //     this.profilPhotographe.append(profileHeader.createPhotographerHeader());
        // });
    }
}

const profile = new Profil();
profile.main();