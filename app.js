const express = require('express')
const mongoose = require('mongoose')

const BaseRouter = require('./routers/baseRouter')

const app = express()
const port = 3000

app.use('/api/v1/',BaseRouter)
// 404 route
app.use((req, res, next) => {
  next(
    new Error("This service is not found")
  )
})
// errors
app.use((error, req, res, next) => {
  res.json({error: error.message})
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