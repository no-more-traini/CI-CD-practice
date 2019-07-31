const mongoose = require('mongoose')

const URI = process.env.DB_URI || 'mongodb://localhost:27017/mern_task'

mongoose.connect(URI,{ useNewUrlParser: true })
  .then(db => console.log('DB is connected'))
  .catch(err => console.log(err))

module.exports = mongoose
