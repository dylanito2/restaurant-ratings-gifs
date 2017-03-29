$(() => {
  $('form').submit( function(e) {
    e.preventDefault()
    let $term = $("#searchBox").val()
    let $location = $("#zipcode").val()
    let $targetDiv = $("#showGif")
    Restaurant.getSearchWord($term, $location)
    .then( (word) => {
      Gif.getGifLink(word)
      .then((gifLink) => {
        let gifController = new GifController($targetDiv, gifLink)
      })
    })
  })
})
