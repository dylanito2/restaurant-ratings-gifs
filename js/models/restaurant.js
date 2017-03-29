class Restaurant {
  static getSearchWord(name, location){
    return YelpApi.getJSON(name, location).then((res) => {
      let parsed = JSON.parse(res)
      if (parsed['businesses'].length != 0) {
        return this.calculateSearchWord(parsed['businesses'][0]['rating'])
      } else {
        return this.calculateSearchWord('fail')
      }
    })
  }

  static calculateSearchWord(score) {
    console.log("Score Is: " + score)
    let wordbank
    if (score < 3 ){
      wordbank = ['bad', 'gross', 'unpleasant', 'gross food',
      'tastes bad', 'shitty food', 'danger', 'stinky',
      'horrible', 'awful']
    }
    else if (score === 3){
      wordbank =['eh', 'meh']
    }
    else if (score > 3){
      wordbank = ['yum', 'nomnomnom', 'fantastic', 'delicious',
      'so good', 'gourmet shit', 'yummy', 'scrumptious',
      'nom', 'nom nom',
      :'nom nom nom']
    }
    else {
      wordbank = ['fail']
    }
    let word = wordbank[Math.floor(Math.random() * wordbank.length)]
    console.log("Search word is: " + word)
    return word
  }
}
