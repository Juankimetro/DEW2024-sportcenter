class Service {
  name
  ratings = []

  constructor (name, ratings = []) {
    this.name = name
    this.ratings = ratings
  }

  get rating () {
    if (this.ratings.length === 0) {
      return 0
    }

    let result = 0
    this.ratings.forEach(rate => {
      result += rate
    })

    return Number((((result / this.ratings.length) * 100) / 100).toFixed(2))
  }

  giveRating (numero) {
    this.ratings.push(numero)
  }
}

module.exports = Service
