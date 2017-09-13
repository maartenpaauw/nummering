import _ from 'lodash'
import numeral from 'numeral'
import 'numeral/locales/nl-nl'

numeral.locale('nl-nl')

export function generate (settings, start = settings.start, end = settings.end) {
  return _.map(_.range(start, (end + 1), settings.step), (number) => {
    return `${settings.prefix}${numeral(number).format(`${'0'.repeat(settings.leading_zeros)}${settings.format_number ? ',' : ''}`)}${settings.suffix}`.trim()
  })
}

export function generateDemoRange (settings) {
  const numbers = (settings.end - settings.start) / settings.step
  if (numbers < 50) {
    return generate(settings)
  } else {
    return generate(settings, settings.start, settings.start + (24 * settings.step))
      .concat(['...'])
      .concat(generate(settings, settings.end - (24 * settings.step)))
  }
}
