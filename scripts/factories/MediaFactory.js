//eslint-disable-next-line no-unused-vars
class MediaFactory {
    constructor(data) {
        if (data.image) {
            return new ImageData(data)
        } else if (data.video) {
            // eslint-disable-next-line no-undef
            return new VideoData(data)
        } else {
            throw 'Unknown data type'
        }
    }
}
