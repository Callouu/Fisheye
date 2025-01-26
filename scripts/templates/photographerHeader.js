class PhotographerHeader {
    constructor(photographer, idURL) {
        this.photographer = photographer;
        this.idPage = idURL;
    };

    createPhotographerHeader() {
        const profilePageHeader = document.querySelector('.main_about');
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
           metaDescription.content = `Découvrez ${this.photographer.name}, photographe professionnel basé à ${this.photographer.city}, ${this.photographer.country} offrant ses services à partir de ${this.photographer.price} € / jour.`;
        };
        const about = `
            <div class="photographer_profile__infos">
                <h1 class="photographer_name">${this.photographer.name}</h1>
                <h2 class="photographer_location">${this.photographer.city}, ${this.photographer.country}</h2>
                <p class="photographer_tagline">${this.photographer.tagline}</p>    
            </div>
            <button class="contact_button" type="button" aria-label="Open contact form" onclick="displayModal()">Contactez-moi</button>
            <img class="photographer_thumbnail" src="assets/photographers/${this.photographer.portrait}" alt="${this.photographer.name}">
        `;

        profilePageHeader.innerHTML = about;
        return about;
    };

    createErrorPhotographer() {
        const mainContent = document.querySelector("#main")
        const errorContent = `
        <div class="errorPhotographer">
        <h2>Oups ! il n'y a rien ici !</h2>
        <div>
        `
        mainContent.innerHTML = errorContent
        return errorContent;
    }
};
