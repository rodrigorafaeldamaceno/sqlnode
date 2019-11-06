const Sequelize = require('sequelize')
const dbConfig = require('../config/database')


console.log(dbConfig)
const conn = new Sequelize(dbConfig)

module.exports = conn