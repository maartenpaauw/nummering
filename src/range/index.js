import _ from 'lodash'

function padding (number, size) {
  let s = String(number)
  while (s.length < size + 1) {
    s = '0' + s
  }
  return s
}

export function generate (settings, start = settings.start, end = settings.end) {
  return _.map(_.range(start, (end + 1), settings.step), (number) => {
    return `${settings.prefix}${padding(number, settings.leading_zeros)}${settings.suffix}`.trim()
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
