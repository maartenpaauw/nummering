const numeral = require('numeral')
require('numeral/locales/nl-nl')
numeral.locale('nl-nl')

console.log(numeral(10000).format(`${'0'.repeat(10)},`))
