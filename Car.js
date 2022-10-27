class Car {
  color
  model
  year

  constructor(color, model, year) {
    this.color = color
    this.model = model
    this.year = year
  }

  toString() {
    return `[Car] - Color: ${this.color}, Model: ${this.model}, Year: ${this.year}.`
  }
}

export { Car }