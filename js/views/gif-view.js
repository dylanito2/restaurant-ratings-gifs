class GifView {
  static renderGif($target, gifLink) {
    $target.html("<img class='giphy-box' src='" + gifLink + "'>")
  }
}
