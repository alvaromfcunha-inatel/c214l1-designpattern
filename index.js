import { Car } from "./Car.js";
import { createCar } from "./CarFactory.js";

(() => {
  const car1 = new Car('Red', 'Ford Ka', '2015')
  const car2 = createCar('Black', 'Jeep Renegade', '2020')

  console.log('Car from class constructor:', car1)
  console.log(car1.toString())
  console.log('Car from createCar factory:', car2)
  console.log(car2.toString())
})();