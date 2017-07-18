const express = require('express') // borrow express function but not running express
const router = express.Router()

const todosController = require('../controllers/todos_controller')

// get
router.get('/', todosController.list)

router.get('/:id', todosController.show)

// post
router.post('/', function (req, res) {
  res.send('create new todos')
})

router.put('/:id', function (req, res) {
  res.send(`updating a todo with id ${req.params.id}`)
})

router.delete('/:id', function (req, res) {
  res.send(`deleting a todo with id ${req.params.id}`)
})

module.exports = router
