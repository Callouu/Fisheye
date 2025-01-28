class Profil {
    constructor() {
        this.dataApi = new PhotographerApi("./data/photographers.json");
        const url = new URLSearchParams(document.location.search);
        this.id = parseInt(url.get("id"));
        this.medias = null;
        this.photographer = null
    }

    async main() {

        this.photographer = await this.dataApi.getPhotographer(this.id);
        const profileHeader = new PhotographerHeader(this.photographer, this.id);
        // Si le photographe n'existe pas alors afficher erreur
        if(this.photographer == null) {
            profileHeader.createErrorPhotographer();
        } else { // Si il existe
            // Afficher le header 
            // profileHeader.createPhotographerHeader()
            // Recuperer les medias du photographe
            this.medias = await this.dataApi.getMediasFromPhotographer(this.id);
            // On affiche le contenu
            this.content()
            this.contactForm()
            // Afficher le carousel
            //const profileMedias = new PhotographerImage(medias, photographer); 
            //profileMedias.createPhotographerMedias(medias);  
            // Parcours les medias du photographe pour chercher si c'est une image ou une video
            // let mediasHtml = ""
            // this.medias.map(media => new MediaFactory(media))
            // .forEach(media => {
            //     if("image" in media){
            //         let ImageMedias = new PhotographerImage(media, this.photographer); 
            //         mediasHtml += ImageMedias.createPhotographerImage();
            //     } else {
            //         let VideoMedias = new PhotographerVideo(media, this.photographer); 
            //         mediasHtml += VideoMedias.createPhotographerVideo(); 
            //     }
            // })
            // document.querySelector(".medias").innerHTML = mediasHtml
            // //Calcul du nombre total de likes
            // // const likeData = await this.dataApi.getMediasFromPhotographer(this.id);
            // // let likeSum = 0
            // // for (let i = 0; i < likeData.length; i++) {
            // //     const result = likeData[i];
            // //     //on additionne toute les datas des likes
            // //     likeSum += result.likes;
            // //   }
            // const likeBtn = document.querySelector(".like_btn")
            // // Affiche les likes
            // const profileLikes = new PhotographerLikes(this.medias, this.photographer)
            // profileLikes.createPhotographerLikes()
        }
    }
    content() {
        // Affiche le Header
        const profileHeader = new PhotographerHeader(this.photographer, this.id);
        profileHeader.createPhotographerHeader()
        // Affiche les images/videos
        let mediasHtml = ""
        this.medias.map(media => new MediaFactory(media))
        .forEach(media => {
            if("image" in media){
                let ImageMedias = new PhotographerImage(media, this.photographer); 
                mediasHtml += ImageMedias.createPhotographerImage();
            } else {
                let VideoMedias = new PhotographerVideo(media, this.photographer); 
                mediasHtml += VideoMedias.createPhotographerVideo(); 
            }
        })
        document.querySelector(".medias").innerHTML = mediasHtml
        //Calcul du nombre total de likes
        const profileLikes = new PhotographerLikes(this.medias, this.photographer)
        profileLikes.createPhotographerLikes()
        // Affiche la lightbox
        const mediaElements = document.querySelectorAll('a[data-id]');
        mediaElements.forEach(media => {
            media.addEventListener('click', (event) => {
            event.preventDefault();
            const lightbox = new LightBox(media);
            lightbox.openLightBox();
            });
        });

    }
    // Ajoute ou retire les likes
    like(id){
        for (let i = 0; i < profile.medias.length; i++) {
            const mediaId = profile.medias[i]["id"];
            // si je trouve le media que j'ai like, j'incremente
            if(id == mediaId) {
                if(profile.medias[i]["is_liked"] != true) {
                    profile.medias[i]["likes"]+=1;
                    profile.medias[i]["is_liked"]=true;
                }else {
                    profile.medias[i]["likes"]-=1;
                    profile.medias[i]["is_liked"]=false;
                }
                // je redraw la page
                profile.content()
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

    contactForm() {
        const formName = document.getElementById('modal_photographer')
        formName.innerText = this.photographer.name
    }
}

const profile = new Profil();
profile.main();