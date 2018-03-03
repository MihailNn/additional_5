module.exports = function check(str, bracketsConfig) {
  let i = 0
  let stack = []

  while (i < str.length) {
    let symbol = str[i]

    let brackets = findBracketsConfigBySymbol(symbol, bracketsConfig)

    if (symbol === brackets[0]) {
      stack.push(symbol)
      i++
    } else if (symbol === brackets[1]) {
      let popped = stack.pop()

      if (popped === brackets[0]) {
        i++
      } else {
        return false
      }
    }
  }

  return stack.length === 0
}

function findBracketsConfigBySymbol(symbol, bracketsConfig) {
  let currBracketsSearch = bracketsConfig.filter(bracket => bracket[0] === symbol || bracket[1] === symbol)
  if (currBracketsSearch.length !== 1) {
    return []
  }

  return currBracketsSearch[0]
}
