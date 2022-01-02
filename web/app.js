const express = require('express')
const app = express()

let isLogin = () => true
let logger = (req, res, next) => {
  console.log(`Petición de tipo: `, req.method)
  next()
}
let showIP = (req, res, next) => {
  console.log('IP: 127.0.0.1')
  next()
}

app.use(
  (req, res, next) => {
    if (isLogin()) {
      next()
    } else {
      res.send('no estas logueado')
    }
  },
  logger,
  showIP
)

//app.use(logger)

app.get('/', (req, res) => {
  res.send(`hello world! ${req.method}`)
})
app.post('/', (req, res) => {
  res.send(`hello world! ${req.method}`)
})
app.put('/', (req, res) => {
  res.send(`hello world! ${req.method}`)
})
app.delete('/', (req, res) => {
  res.send(`hello world! ${req.method}`)
})

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})
