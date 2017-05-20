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

export function generateDemoRange (length, range) {
  if (length < 51) {
    return range
  } else {
    return range.slice(0, 25)
      .concat(['...'])
      .concat(range.slice(length - 25, length))
  }
}
