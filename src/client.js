class Client {
  name
  #age = 50

  constructor (name, age) {
    this.name = name
    if (age !== undefined && age >= 0) {
      this.#age = age
    }
  }

  get category () {
    if (this.#age < 22) {
      return 'Promesa'
    } else if (this.#age >= 22 && this.#age <= 40) {
      return 'Senior'
    } else {
      return 'Veterano'
    }
  }

  get age () {
    return this.#age
  }

  set age (a) {
    if (a >= 0) {
      this.#age = a
    }
  }

  turnedYearsOld () {
    return this.#age++
  }
}

module.exports = Client
