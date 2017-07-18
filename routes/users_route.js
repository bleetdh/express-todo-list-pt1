const express = require('express') // borrow express function but not running express
const router = express.Router()

// get
router.get('/', function (req, res) {
  res.send('list all users')
})

router.get('/:id', function (req, res) {
  res.send(`show user with id ${req.params.id}`)
})

// post
router.post('/', function (req, res) {
  res.send('create new user')
})

router.put('/:id', function (req, res) {
  res.send(`updating a user with id ${req.params.id}`)
})

router.delete('/:id', function (req, res) {
  res.send(`deleting a user with id ${req.params.id}`)
})

module.exports = router
