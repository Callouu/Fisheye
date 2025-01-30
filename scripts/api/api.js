class Api {
    /**
     * 
     * @param {string} url 
     */
    constructor(url) {
        this._url = url
    }

    async get() {
        return fetch(this._url)
            .then(res => res.json())
            .catch(err => console.log('an error occurs', err))
    }
}

//eslint-disable-next-line no-unused-vars
class PhotographerApi extends Api {
    /**
     * 
     * @param {string} url 
     */
    constructor(url) {
        super(url)
    }

    async getAllPhotographers() {
        const result = await this.get()
        return result.photographers
    }

    async getPhotographer(id) {
        const result = await this.get()
        for(let i=0; i < result.photographers.length; i++) {
            const photographer = result.photographers[i]
            // si l'id cherché est egal a l'id du photgrapher qu'on analyse alors je le renvoie
            if(id === photographer.id) {
                return photographer
            }
        }
        console.log('an error occurs')
        return null 
    }
    async getMedias() {
        const result = await this.get()
        return result.medias
    }

    async getMediasFromPhotographer(id) {
        const result = await this.get()
        const medias = []
        for(let i=0; i < result.media.length; i++) {
            const media = result.media[i]
            // si l'id cherché est egal a l'id du photgrapher qu'on analyse alors je le renvoie
            if(id === media.photographerId) {
                medias.push(media)
            }
        }
        return medias
    }

}