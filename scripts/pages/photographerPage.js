class Profil {
    constructor() {
        this.profilPhotographe = document.querySelector('.main_about');
        this.dataApi = new PhotographerApi("./data/photographers.json");
        const url = new URLSearchParams(document.location.search);
        this.id = parseInt(url.get("id"));
    }

    async main() {
        const photographer = await this.dataApi.getPhotographer(this.id);
        const profileHeader = new PhotographerHeader(photographer, this.id);
        // Si le photographe n'existe pas alors afficher erreur
        if(photographer == null) {
            this.profilPhotographe.innerHTML = profileHeader.createNullPhotographer();
        } else { // Si il existe
            // Afficher le header 
            this.profilPhotographe.innerHTML = profileHeader.createPhotographerHeader();
            // Recuperer les medias du photographe
            const medias = await this.dataApi.getMediasFromPhotographer(this.id);
            // Afficher le carousel
            const profileMedias = new PhotographerPictures(medias);
            this.profilPhotographe.innerHTML += profileMedias.createPhotographerMedias();
            
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