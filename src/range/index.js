import _ from 'lodash'

function padding (number, size) {
  let s = String(number)
  while (s.length < size + 1) {
    s = '0' + s
  }
  return s
}

export function generate (start, end, step, prefix, leadingZeros, suffix) {
  return _.map(_.range(start, (end + 1), step), (number) => {
    return `${prefix}${padding(number, leadingZeros)}${suffix}`.trim()
  })
}

export function generateDemoRange (start, end, step, prefix, leadingZeros, suffix) {
  const numbers = (end - start) / step
  if (numbers < 50) {
    return generate(start, end, step, prefix, leadingZeros, suffix)
  } else {
    return generate(start, start + (24 * step), step, prefix, leadingZeros, suffix)
      .concat(['...'])
      .concat(generate(end - (24 * step), end, step, prefix, leadingZeros, suffix))
  }
}
