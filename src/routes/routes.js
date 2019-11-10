const router = require('express').Router()
const userController = require('../controllers/UserController')
const addressesController = require('../controllers/AddressesController')

router.get('/', (req, res) => {
  return res.json({ status: 'ok' })
})

router.post('/users', userController.store);
router.get('/users', userController.index)

router.post('/users/:user_id/addresses', addressesController.store)
router.get('/users/:user_id/addresses', addressesController.index)

module.exports = router