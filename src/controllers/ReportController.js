const { Op } = require('sequelize')

const User = require('../models/User')

module.exports = {
  async show(req, res) {
    // todos os usuarios com gmail
    // todos os que moram na rua santa catarina
    // desses usuario buscar as tecnologias que comecem com React

    const users = await User.findAll({
      attributes: ['name', 'email'],
      where: {
        email: {
          [Op.iLike]: '%gmail.com'
        }
      },
      include: [
        { association: 'addresses', where: { street: 'Rua santa catarina' } },
        {
          association: 'techs',
          required: false,
          where: {
            name: {
              [Op.iLike]: 'React%'
            }
          }
        }
      ]
    })
    return res.json(users)
  }
}