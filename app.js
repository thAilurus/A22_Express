const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(express.static('public'))

//Home路由設定
app.get('/', (req, res) => {
  res.render('home')
})

//About路由設定
app.get('/about', (req, res) => {
  res.render('about')
})

//Portfolio路由設定
app.get('/portfolio', (req, res) => {
  res.render('portfolio')
})

//Contact路由設定
app.get('/contact', (req, res) => {
  res.render('contact')
})


//監聽
app.listen(port, () => {
  console.log(`Express is listening on http://localhost:${port}`)
})