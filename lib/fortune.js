const fortunes = [
  "123",
  "abc",
  "xyz",
]

let getFortune = function() {
  return fortunes[Math.floor(Math.random()*fortunes.length)]
}

export { getFortune }
