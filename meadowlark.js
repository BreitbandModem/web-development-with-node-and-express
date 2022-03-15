import express from 'express'
import { engine } from 'express-handlebars'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

import { getFortune } from './lib/fortune.js'

const app = express()

const port = process.env.PORT || 3000

app.engine('handlebars', engine({
  defaultLayout: 'main',
}))
app.set('view engine', 'handlebars')

app.listen(port, () => console.log(
  `Express started on http://localhost:${port}; ` +
  `press Ctrl-C to terminate.`))

app.use(express.static(fileURLToPath(import.meta.url+'/../public')))
  
app.get('/', (req, res) => res.render('home'))

app.get('/about', (req, res) => {
  res.render('about', { fortune: getFortune() })
})

// custom 404 page
app.use((req, res) => {
  res.status(404)
  res.render('404')
})

// custom 500 page
app.use((err, req, res, next) => {
  res.status(500)
  res.render('500')
})

