const router = require('express').Router()
const userController = require('../controllers/UserController')

router.get('/', (req, res) => {
  return res.json({ status: 'ok' })
})

router.post('/users', userController.store);
router.get('/users', userController.index)

module.exports = router