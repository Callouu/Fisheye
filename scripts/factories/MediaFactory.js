class MediaFactory {
    constructor(data) {
        if (data.image) {
            return new ImageData(data)
        } else if (data.video) {
            return new VideoData(data)
        } else {
            throw 'Unknown data type'
        }
    }
}
