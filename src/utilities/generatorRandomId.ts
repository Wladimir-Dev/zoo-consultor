export const generatorRandomId = () => {
  let random = Math.random()
  random = random * 100 + 1

  return random
}
