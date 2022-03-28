const fortunes = [
  '123',
  'abc',
  'xyz',
]

const getFortune = () => fortunes[Math.floor(Math.random() * fortunes.length)]

export default getFortune
