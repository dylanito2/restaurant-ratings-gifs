class Gif {
  static getGifLink(searchTerm) {
    return GiphyApi.getGifs(searchTerm).then((gifs) => {
      var linkCollection = $.map(gifs['data'], function(element) {
        return element['images']['fixed_height']['url']
      })
      let arrayValue = Math.floor(Math.random() * linkCollection.length)
      return linkCollection[arrayValue]
    })
  }
}
