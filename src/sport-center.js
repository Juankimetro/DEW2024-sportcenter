class SportCenter {
  name
  #services
  membership = 0
  fee

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
}

module.exports = SportCenter
