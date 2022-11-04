module.exports = function check(str, bracketsConfig) {
  const regStr = bracketsConfig.map(brackets => brackets.map(br => br.replace(/([\$\^\.\*\+\?\\\/\{\}\[\]\(\)\|!])/g, '\\$1')).join('')).join('|')
  const reg = new RegExp(regStr)
  console.log({ reg })
  if (str.length % 2 != 0) return false
  const bracketsRegex = /\(\)|\[\]|\{\}|\|\|/
  while (reg.test(str)) str = str.replace(reg, '')
  console.log({ str })
  return (str === '') ? true : false
}
