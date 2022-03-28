import getFortune from './fortune.js'

const home = (req, res) => res.render('home')

const about = (req, res) => res.render('about', { fortune: getFortune() })

const notFound = (req, res) => res.render('404')

/* eslint-disable no-unused-vars */
const serverError = (err, req, res, next) => res.render('500')
/* eslint-enable no-unused-vars */

export {
  home, about, notFound, serverError,
}
