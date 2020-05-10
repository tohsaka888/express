var express = require('express')

var app = express()

var cors = require('cors')

app.use(cors())

var port = 8000

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.post('/add', function (req, res, next) {
  if(req.body.user === 'admin'&&req.body.pass === '123456'){
    res.send({login:'ok'})
  }else{
    res.send({login:'error'})
  }
})

app.listen(port, () => console.log(`Example app listening on port port!`))


app.use(express.json())
app.listen(8080)

app.post('/test', (req, res) => {
  res.json({ body: req.body })
});