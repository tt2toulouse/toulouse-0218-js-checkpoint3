const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'wilderalaplaya',
  password: 'qwerty1234',
  database: 'wcs_playalist'
})

module.exports = connection