// DO NOT CHANGE THIS FILE
const knex = require('knex')
const configs = require('../knexfile.js')
const environment = process.env.NODE_ENV || 'development'
const { Model } = require('objection')

function setupDB() {
    const db = knex(configs[environment])
    Model.knex(db)
}

module.exports = setupDB
