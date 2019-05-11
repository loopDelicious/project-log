const express = require('express')
const cors = require('cors')
const app = express()
const port = 4000
const formData = require('express-form-data')
app.use(cors())
// TODO: postgres instead of cloudinary

let count = 0
app.get('/count', (req, res) => res.send({ count }))
app.post('/count/increment', (req, res) => {
  count++
  res.send({ count })
})

app.post('/count/decrement', (req, res) => {
  count--
  res.send({ count })
})

app.post('/image-upload', (req, res) => {

  const values = Object.values(req.files)
  // const promises = values.map(image => cloudinary.uploader.upload(image.path))

  Promise
    .all(promises)
    .then(results => res.json(results))
})

app.post('/login', (req, res) => {
  let username = req.username
  let password = req.password
  // TODO: verify credentails
  // res.send({ user })
})

app.listen(port, () => console.log(`Example API app listening on port ${port}!`))
