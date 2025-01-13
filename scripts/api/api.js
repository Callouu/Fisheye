class Api {
    constructor(url) {
        this._url = url
    }

    async getPhotographers() {
        return fetch(this._url)
            .then(res => res.json())
            .then(res => res.photographers)
            .catch(err => console.log('erreur', err))
    }

    async getMedias() {
        return fetch(this._url)
            .then(res => res.json())
            .then(res => res.media)
            .catch(err => console.log('erreur', err))
    }

    async getLikes() {
        return fetch(this._url)
            .then(res => res.json())
            .then(res => res.media)
            .catch(err => console.log('erreur', err))
    }
}

class DataApi extends Api {
    constructor(url) {
        super(url)
    }

    async getAllPhotographers() {
        return await this.getPhotographers()
    }

    async getPhotos() {
        return await this.getMedias()
    }

    async getLikes() {
        return await this.getLikes()
    }
}