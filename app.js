const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
var bodyParser = require('body-parser')

const BaseRouter = require('./routers/baseRouter')
const TodosRouter = require('./routers/TodosRouter')

const app = express()
const port = 3000
const jsonParser = bodyParser.json()

// Add headers before the routes are defined
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8082');
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  // res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

app.use(jsonParser)

app.use('/js', express.static(path.join(__dirname, 'frontend', 'dist', 'js')));
app.use('/css', express.static(path.join(__dirname, 'frontend', 'dist', 'css')));
app.use('/img', express.static(path.join(__dirname, 'frontend', 'dist', 'img')));
app.use('/', express.static(path.join(__dirname, 'frontend', 'dist')));

app.use('/api/v1/',BaseRouter)
app.use('/api/v1/',TodosRouter)
// handle api not deffined route
app.use((req, res, next) => {
  const path = req.path
  const apiPath = path.match(/^\/api\//gm)
  if(apiPath) {
    const error = new Error("This service is not found")
    error.statusCode = 404
    next(
      // new Error(req.path + '---' + apiPath)
      error
    )
  } else {
    next()
  }
})
  
app.use((req, res, next) => {
  return res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'))
})
// errors
app.use((error, req, res, next) => {
  if (error.statusCode) {
    res.status(error.statusCode).json({error: error.message})
  } else {
    res.status(500).json({error: error.message})
  }
})

const {
  MONGO_USERNAME,
  MONGO_PASSWORD,
  MONGO_HOSTNAME,
  MONGO_PORT,
  MONGO_DB
} = process.env
// const MONGO_DB_URL = 'mongodb://application_user:application_pass@mongodb_server:27017/application_database';
const MONGO_DB_URL = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}`;


mongoose.connect(MONGO_DB_URL, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`)
    })
  })
  .catch(err => {
    console.log('Connecting to mongoose: '+ err.message + '\n' + err)
  })
;