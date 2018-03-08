import knex from 'knex'
import config from './postgressConfig'

const db = knex(config)

function healthCheck() {
  return db.select(1).timeout(config.healthCheck.timeout)
}

export default Object.assign(db, {healthCheck})
