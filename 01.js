var express = require('express')

var app = express()

var port = 8000

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.post('/add', function (req, res, next) {
  console.log(req.body)
  res.json(req.body)
})

app.listen(port, () => console.log(`Example app listening on port port!`))
