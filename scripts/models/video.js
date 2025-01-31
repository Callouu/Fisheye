//eslint-disable-next-line no-unused-vars
class VideoData {
    constructor(data) {
        this._id = data.id;
        this._photographerId = data.photographerId;
        this._title = data.title;
        this._video = data.video;
        this._tags = data.tags;
        this._likes = data.likes;
        this._date = data.date;
        this._price = data.price;
        this._description = data.description;
        this.is_liked = data.is_liked
    }

    get id() {
        return this._id;
    }

    get photographerId() {
        return this._photographerId;
    }

    get title() {
        return this._title;
    }

    get video() {
        return this._video;
    }

    get tags() {
        return this._tags;
    }

    get likes() {
        return this._likes;
    }

    get date() {
        return this._date;
    }

    get price() {
        return this._price;
    }

    get description() {
        return this._description;
    }
}