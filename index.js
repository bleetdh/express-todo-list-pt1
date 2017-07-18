// express
const express = require('express')
const app = express()
// handlebars
const exphbs = require('express-handlebars')
// body parser
const bodyParser = require('body-parser')
// models and controllers
const Todo = require('./models/todo')
const todosController = require('./controllers/todos_controller')
// mongoose
const mongoose = require('mongoose')
const url = 'mongodb://localhost:27017/ExpressMongoTodo'
mongoose.connect(url, {
  useMongoClient: true
})
mongoose.Promise = global.Promise

app.use(express.static('public'))
app.use(bodyParser.urlencoded({
  extended: true
}))

app.engine('handlebars', exphbs({
  defaultLayout: 'main',
}))
app.set('view engine', 'handlebars')

app.get('/', function (req, res) {
  res.render('home')
})

app.get('/todo', function (req, res) {
  Todo.find({}, function (err, allTodos) {
    if (err) throw err
    res.render('todo/index', {
      todos: allTodos
    })
  })
})

app.post('/todo', function (req, res) {
  var newTodo = new Todo({
    name: req.body.name,
    description: req.body.description,
    completed: req.body.completed
  })

  newTodo.save(function (err, newTodo) {
    if (err) throw err

    res.redirect('/todo')
  })
})

const port = 4000
app.listen(port, function () {
  console.log('running ExpressMongoTodo at ' + port)
})
