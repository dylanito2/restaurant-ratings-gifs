$(() => {
  $('form').submit( function(e) {
    e.preventDefault()
    $term = $("#searchBox").val()
    $location = $("#zipcode").val()
    $targetDiv = $("#showGif")
    Restaurant.getSearchWord($term, $location)
    .then( (word) => {
      Gif.getGifLink(word)
      .then((gifLink) => {
        let gifController = new GifController($targetDiv, gifLink)
      })
    })
  })
})
