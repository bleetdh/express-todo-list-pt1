// express
const express = require('express')
const app = express()
// handlebars
const exphbs = require('express-handlebars')
// body parser
const bodyParser = require('body-parser')
// models and controllers
const Todo = require('./models/todo')
// mongoose
const mongoose = require('mongoose')
const url = 'mongodb://localhost:27017/ExpressMongoTodo'
mongoose.Promise = global.Promise
mongoose.connect(url, {
  useMongoClient: true
}).then(
  function () {
    console.log('successfully connected to mongoose')
  }, function (err) {
    console.log('failed to connect to mongoose')
    console.log(err)
  }
)
// route
const todosRoute = require('./routes/todos_route')
const usersRoute = require('./routes/users_route')
// middleware
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use('/todo', todosRoute)
app.use('/users', usersRoute)

// engine
app.engine('handlebars', exphbs({
  defaultLayout: 'main',
  partialsDir: 'views/partials'
}))
app.set('view engine', 'handlebars')

// get
app.get('/', function (req, res) {
  res.render('home')
})

// app.get('/todo', function (req, res) {
//   Todo.find({}, function (err, allTodos) {
//     if (err) throw err
//     res.render('todo/index', {
//       todos: allTodos
//     })
//   })
// })
//
// // post
// app.post('/todo', function (req, res) {
//   var newTodo = new Todo({
//     name: req.body.name,
//     description: req.body.description,
//     completed: req.body.completed
//   })
//   newTodo.save(function (err, newTodo) {
//     if (err) throw err
//
//     res.redirect('/todo')
//   })
// })

// listen
const port = 4000
app.listen(port, function () {
  console.log(`running ExpressMongoTodo at ${port}`)
})
