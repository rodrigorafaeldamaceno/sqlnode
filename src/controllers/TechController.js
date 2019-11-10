const Tech = require('../models/Tech')
const User = require('../models/User')


module.exports = {
  async index(req, res) {
    const { user_id } = req.params

    const user = await User.findByPk(user_id, {
      include: {
        association: 'techs',
        // não traz os atributos de techs
        through: { attributes: [] }
      }
    })

    if (!user)
      return res.status(403).json({ error: 'User not found' })

    return res.json(user.techs)
  },
  async store(req, res) {
    const { user_id } = req.params
    const { name } = req.body

    const user = await User.findByPk(user_id)

    if (!user)
      return res.status(403).json({ error: 'User not found' })

    const [tech] = await Tech.findOrCreate({
      where: { name }
    })

    await user.addTech(tech)

    return res.json(tech)
  },
  async delete(req, res) {
    const { user_id } = req.params
    const { name } = req.body

    const user = await User.findByPk(user_id)

    if (!user)
      return res.status(403).json({ error: 'User not found' })

    const tech = await Tech.findOne({
      where: { name }
    })

    // remove o relacionamento de user_tech
    await user.removeTech(tech)

    res.json(tech)
  }
}