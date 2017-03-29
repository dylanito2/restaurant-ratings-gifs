class GiphyApi {
  static getGifs(searchTerm) {
    let url = "https://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&api_key=dc6zaTOxFJmzC"
    return $.get(url).then((resp) => {
      console.log(resp)
      return resp
    })
  }
}
