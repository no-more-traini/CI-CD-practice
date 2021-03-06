const morgan = require('morgan')
const path = require('path')
const express = require('express')
const cors = require('cors');

const app = express()

const mongoose = require('./database');

// Settings
app.set('port', process.env.PORT || 3000)

// Middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(cors({
  origin: '*',
  optionsSuccessStatus: 200
}))

// Routes
app.use('/api/task', require('./routes/task.routes'))

// Static files
app.use(express.static(path.join(__dirname, 'public')))

app.listen(app.get('port'), () => {
  console.log(`Server on port: ${app.get('port')}`);
})
