const Service = require('./service')

class Activity extends Service {
  fixedCost
  variableCost
  assistance
  #instructor = null

  constructor (name, fixedCost = 0, variableCost = 0, assistance = 0) {
    super(name)
    this.fixedCost = fixedCost
    this.variableCost = variableCost
    this.assistance = assistance
  }

  calculateCost () {
    return this.fixedCost + this.variableCost * this.assistance
  }

  get instructor () {
    return this.#instructor
  }

  set instructor (instructor) {
    this.#instructor = instructor
  }

  ledBy (instructor) {
    instructor.lead(this)
  }
}

module.exports = Activity
