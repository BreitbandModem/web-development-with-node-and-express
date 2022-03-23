import express from 'express'
import { engine } from 'express-handlebars'
import { fileURLToPath } from 'url'
import url from 'url'

import { home, about, notFound, serverError } from './lib/handlers.js'

const app = express()

const port = process.env.PORT || 3000

app.engine('handlebars', engine({
  defaultLayout: 'main',
}))
app.set('view engine', 'handlebars')

if (import.meta.url === url.pathToFileURL(process.argv[1]).href) {
  // module was not imported but called directly
  app.listen(port, () => console.log(
    `Express started on http://localhost:${port}; ` +
    `press Ctrl-C to terminate.`))
}

app.use(express.static(fileURLToPath(import.meta.url+'/../public')))
app.get('/', home)
app.get('/about', about)
app.use(notFound)
app.use(serverError)

export { app }
