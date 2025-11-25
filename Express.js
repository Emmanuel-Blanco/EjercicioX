const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

app.get('/alumnos', (req, res) => {
  console.log(req.query);
  res.send('Hello World!')
})

app.get('/docentes/:control'),(req, res)=>{
  console.log(req.params);
  res.send('Hello wworld');
}

app.get('/directivos', express(),(req,res)=>{
  console.log(req.query);
  res.send('Hello world');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})