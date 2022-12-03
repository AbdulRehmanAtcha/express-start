import express from 'express';
console.log("hello mjs");
const app = express()
const port = 3000

app.get('/', (req, res) => {
    console.log("request IP: ", req.ip);    
  res.send('Hello World! from A.Rehman')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})  
