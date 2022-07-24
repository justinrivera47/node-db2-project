// STRETCH
const cars = [
  {
    vin: "1221212121122",
    make: "honda",
    model: "accord",
    mileage: 12343,
    transmission: "manual",
    title: "clean"
  },
  {
    vin: "1221212124321",
    make: "mercedes",
    model: "es6",
    mileage: 12343,
    transmission: "automatic",
    title: "salvage"
  },
  {
    vin: "1221212121167",
    make: "ford",
    model: "focus",
    mileage: 12343,
  },
]

exports.seed = function (knex) {
  return knex('cars')
  .truncate().then(()=>{
    return knex('cars').insert(cars)
  })
}