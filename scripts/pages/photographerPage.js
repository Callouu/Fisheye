// Objet pour la page du photographe
class Profil {
    constructor() {
        //eslint-disable-next-line no-undef
        this.dataApi = new PhotographerApi("./data/photographers.json");
        const url = new URLSearchParams(document.location.search);
        this.id = parseInt(url.get("id"));
        this.medias = null;
        this.photographer = null
    }
    // Contenu envoyé sur notre page HTML
    async main() {
        this.photographer = await this.dataApi.getPhotographer(this.id);
        // eslint-disable-next-line no-undef
        const profileHeader = new PhotographerHeader(this.photographer);
        // Si le photographe n'existe pas alors afficher erreur
        if(this.photographer == null) {
            profileHeader.createErrorPhotographer();
        } else { // Si il existe
            // Afficher le header 
            // Recuperer les medias du photographe
            this.medias = await this.dataApi.getMediasFromPhotographer(this.id);
            // On affiche le contenu
            this.content()
        }
    }

    //Contenu HTML qui sera envoyé dans le main()
    content() {
        // Affiche le Header
        // eslint-disable-next-line no-undef
        const profileHeader = new PhotographerHeader(this.photographer, this.id);
        profileHeader.createPhotographerHeader()
        // Affiche les images/videos
        let mediasHtml = ""
        // eslint-disable-next-line no-undef
        this.medias.map(media => new MediaFactory(media))
        .forEach(media => {
            if("image" in media){
                // eslint-disable-next-line no-undef
                let ImageMedias = new PhotographerImage(media, this.photographer); 
                mediasHtml += ImageMedias.createPhotographerImage();
            } else {
                // eslint-disable-next-line no-undef
                let VideoMedias = new PhotographerVideo(media, this.photographer); 
                mediasHtml += VideoMedias.createPhotographerVideo(); 
            }
        })
        document.querySelector(".medias").innerHTML = mediasHtml
        //Calcul du nombre total de likes
        // eslint-disable-next-line no-undef
        const profileLikes = new PhotographerLikes(this.medias, this.photographer)
        profileLikes.createPhotographerLikes()
        // Affiche la lightbox
        const mediaElements = document.querySelectorAll('a[data-id]');
        mediaElements.forEach(media => {
            media.addEventListener('click', (event) => {
            event.preventDefault();
            // eslint-disable-next-line no-undef
            const lightbox = new LightBox(media);
            lightbox.openLightBox();
            });
        });
        // Affiche le nom du photographe dans le formulaire
        const formName = document.getElementById('modal_photographer')
        formName.innerText = this.photographer.name

    }

    // Ajoute ou retire les likes
    like(id){
        for (let i = 0; i < profile.medias.length; i++) {
            const mediaId = profile.medias[i]["id"];
            // si je trouve le media que j'ai like, j'incremente
            if(id == mediaId) {
                const test = document.querySelector(`button[id="${id}"]`)
                const span = test.querySelector('span')
                const countSpan = document.querySelector(`article[id="${id}"] .count`);
                const globalCount = document.querySelector('.likes_count span')
                if(profile.medias[i]["is_liked"] != true) {
                    profile.medias[i]["likes"]+=1;
                    profile.medias[i]["is_liked"]=true;
                    // redraw
                    span.classList.remove('nolike');
                    span.classList.add('liked');
                    countSpan.innerText = profile.medias[i]["likes"]
                    globalCount.innerText = parseInt(globalCount.innerText) + 1
                }else {
                    profile.medias[i]["likes"]-=1;
                    profile.medias[i]["is_liked"]=false;
                    // redraw
                    span.classList.remove('liked');
                    span.classList.add('nolike')
                    countSpan.innerText = profile.medias[i]["likes"]
                    globalCount.innerText = parseInt(globalCount.innerText) - 1
                }
                // je redraw mes medias
                // profile.content()
                return
            }
        }
    }

    // Filtre les medias
    applyFilter(filter){
        // on recupere la valeur du select
        const filterValue = filter
        const mediasFiltered = Array.from(this.medias)
        if (filterValue == "Popularité") {
            // Trier par like
            mediasFiltered.sort(function (a, b) {
            return b.likes - a.likes;
            });
        }
        else if (filterValue == "Titre") {
            // Trier par Titre
            mediasFiltered.sort(function (a, b) {
            return a.title.localeCompare(b.title);
            })
        }
        else if (filterValue == "Date") {
            // Trié par Date la plus récente
            mediasFiltered.sort(function(a, b) {
            return new Date(b.date) - new Date(a.date)
            })
        }
        this.medias = mediasFiltered
        this.content();
    }
}

// On instancie notre class Profil avec la methode main
const profile = new Profil();
profile.main();