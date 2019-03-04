const express = require('express')
const app = express();
const cors = require('cors');
const mongoose = require('mongoose'); //
// const uri = 'mongodb://cruel32:854120202qq!@ds151853.mlab.com:51853/heroku_4hbxmh1n';
const uri = 'mongodb://cruel32:854120202qq!@ds131258.mlab.com:31258/heroku_8h6ntr26';

const usersRouter = require('./users');

mongoose.Promise = global.Promise;

// mongoose.createConnection(uri, { useNewUrlParser: true })
//   .then(() => console.log("Connected to mongod server"))
//   .catch(e => console.error(e));;

mongoose.connect(uri, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify:false,
})
  .then(() => console.log("Connected to mongod server"))
  .catch(e => console.error(e));;

app.use(cors());


app.use('/users', usersRouter);

// Export the server middleware
module.exports = {
  path: '/api',
  handler: app
}
