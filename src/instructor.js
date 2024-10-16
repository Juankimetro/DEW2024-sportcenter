const Activity = require('./activity')

class Instructor {
  name
  #basicSalary = 500
  ledActivities = []

  constructor (name, basicSalary) {
    this.name = name
    if (basicSalary !== undefined) {
      this.#basicSalary = basicSalary
    }
  }

  get salary () {
    return this.#basicSalary +
        this.ledActivities.reduce((t, a) => t + 100 + 5 * a.assistance, 0)
  }

  lead (activity) {
    if (activity instanceof Activity) {
      activity.instructor = this
      this.ledActivities.push(activity)
    }
  }
}

module.exports = Instructor
