const router = require('express').Router()

const userController = require('../controllers/UserController')
const addressesController = require('../controllers/AddressesController')
const techController = require('../controllers/TechController')
const reportController = require('../controllers/ReportController')

router.get('/', (req, res) => {
  return res.json({ status: 'ok' })
})

router.post('/users', userController.store);
router.get('/users', userController.index)

router.post('/users/:user_id/addresses', addressesController.store)
router.get('/users/:user_id/addresses', addressesController.index)

router.post('/users/:user_id/techs', techController.store)
router.get('/users/:user_id/techs', techController.index)
router.delete('/users/:user_id/techs', techController.delete)

router.get('/report', reportController.show)

module.exports = router