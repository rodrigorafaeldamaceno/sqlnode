const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

const User = require('../models/User')
const Address = require('../models/Address')
const Tech = require('../models/Tech')
// console.log(dbConfig)
const connection = new Sequelize(dbConfig)

User.init(connection)
Address.init(connection)
Tech.init(connection)

User.associate(connection.models)
Address.associate(connection.models)
Tech.associate(connection.models)


// console.log(connection.models)
module.exports = connection