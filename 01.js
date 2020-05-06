const express = require('express')
const app = express()
const port = 8000

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/add',(req,res)=>{
    console.log(req.body)
    if(req.body.user === 'admin'&&req.body.pass === 123456) {
        res.send('ok')
        console.log('ok')
    }else{
        res.send('error')
        console.log('error')
    }
})

app.listen(port, () => console.log(`Example app listening on port port!`))
