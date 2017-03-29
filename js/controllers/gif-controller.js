class GifController {
  constructor($targetDiv, gifLink) {
    this.$targetDiv = $targetDiv
    this.gifLink = gifLink
    this.render()
  }

  render(){
    GifView.renderGif(this.$targetDiv, this.gifLink)
  }
}
