class YelpApi {
  static getJSON(term, location) {
    return $.get('http://localhost:3000/?term=' + term + '&location=' + location ).then((resp) => {
      return resp
    })
  }
}
