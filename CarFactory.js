const createCar = (color, model, year) => ({
  color,
  model,
  year,
  toString: () => {
    return `[Car] - Color: ${color}, Model: ${model}, Year: ${year}.`
  }
})

export { createCar }