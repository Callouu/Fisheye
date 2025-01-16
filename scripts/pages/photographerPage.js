class Profil {
    constructor() {
        this.profilPhotographe = document.querySelector('.main_about');
        this.dataApi = new PhotographerApi("./data/photographers.json");
        const url = new URLSearchParams(document.location.search);
        this.id = parseInt(url.get("id"));
    }

    async main() {
        const photographerData = await this.dataApi.getPhotographers(this.id);
        const profileHeader = new PhotographerHeader(photographerData);      
        this.profilPhotographe.append(profileHeader.createPhotographerHeader());
    }
}

const profile = new Profil();
profile.main();