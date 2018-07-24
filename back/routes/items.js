const express = require('express')
const db = require('../db')
const router = express.Router()

router.get('/', (req, res) => {
  db.query('SELECT * FROM items', (err, items) => {
    if (err) {
      console.error(err)
      return res.status(500).json({error: 'Database query failed'})
    }
    res.json(items)
  })
})

router.post('/', (req, res) => {
  const {name, picture} = req.body
  const query = 'INSERT INTO items (name, picture) VALUES (?, ?)'
  const selectQuery = 'SELECT * from items WHERE id = ?'
  db.query(query, [name, picture], (err, result) => {
    if (err) {
      console.error(err)
      return res.status(500).json({error: 'Database query failed'})
    }
    db.query(selectQuery, [result.insertId], (err, items) => {
      if (err) {
        console.error(err)
        return res.status(500).json({error: 'Database query failed'})
      }

      res.json(items[0])
    })
  })
})

module.exports = router
