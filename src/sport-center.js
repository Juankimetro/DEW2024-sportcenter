const Activity = require('./activity')
const Facility = require('./facility')
const Instructor = require('./instructor')
const Service = require('./service')

class SportCenter {
  name
  #services = []
  membership = 0
  fee
  #instructos = []

  constructor (name, fee = 0, membership = 0) {
    this.name = name
    this.fee = fee
    this.membership = membership
    /* if (membership !== undefined) {
      this.membership = membership
    } */
  }

  income () {
    return this.fee * this.membership
  }

  getServices () {
    return this.#services
  }

  addService (...services) {
    services.forEach(service => {
      if (service instanceof Service && !this.#services.includes(service)) {
        this.#services.push(service)
      }
    })
  }

  removeService (services) {
    if (services instanceof Service) {
      const index = this.#services.indexOf(services)
      if (index >= 0) {
        this.#services.splice(index, 1)
      }
    }
  }

  getFacilities () {
    return this.#services.filter(s => s instanceof Facility)
  }

  getActivities () {
    return this.#services.filter(s => s instanceof Activity)
  }

  orderServicesBy (criteria) {
    switch (criteria) {
      case 'name': this.#services.sort((a, b) => (a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1))
        break
      case 'rating': this.#services.sort((a, b) => (a.rating > b.rating ? -1 : 1))
        break
      default: break
    }
  }

  getInstructors () {
    return this.#instructos
  }

  addInstructor (instructor) {
    if (instructor instanceof Instructor && !this.#instructos.includes(instructor)) {
      this.#instructos.push(instructor)
    }
  }

  removeInstructor (instructor) {
    if (instructor instanceof Instructor) {
      const index = this.#instructos.indexOf(instructor)
      if (index >= 0) {
        this.#instructos.splice(index, 1)
      }
    }
  }

  listInstructorsActivities () {
    return this.#instructos.map((i) => [i.name, ...i.ledActivities.map((a) => a.name)])
  }

  costServices () {
    return this.#services.reduce((t, s) => t + s.calculateCost(), 0)
  }

  costInstructors () {
    return this.#instructos.reduce((t, i) => t + i.salary, 0)
  }
}
module.exports = SportCenter
