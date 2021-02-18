const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.get('/healthcheck', (req, res) => {
  res.send('works')
})

app.get('/version', (req, res) => {
  res.send('release v17')
})

app.listen(PORT, () => {
  console.log('server started on port 5000') //eslint-disable-line
})
//some changes