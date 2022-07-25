const Car = require('./cars-model')

const checkCarId = async (req, res, next) => {
  try {
    const cars = await Car.getById(req.params.id)
    if(!cars){
      next({
        status: 404,
        message: 'not found'
      })
    } else {
      next()
    }
  } catch (err) {
    next(err)
  }
}

const checkCarPayload = (req, res, next) => {
  // DO YOUR MAGIC
}

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
}

const checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
}


module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique
}