const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  var a = 7;
  var b= 5;
  var c = a + b;
  res.send(`Hello World! ${c}`)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})