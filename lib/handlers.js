import { getFortune } from './fortune.js'

let home = function(req, res) {
  res.render('home')
}

let about = function(req, res) {
  res.render('about', { fortune: getFortune() })
}

let notFound = function(req, res) {
  res.render('404')
}

let serverError = function(err, req, res, next) {
  res.render('500')
}

export { home, about, notFound, serverError }
