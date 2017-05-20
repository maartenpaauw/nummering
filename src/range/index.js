import _ from 'lodash'
import addZero from 'add-zero'

export function generate (start, end, step, prefix, leadingZeros, suffix) {
  return _.map(_.range(start, (end + 1), step), (number) => {
    return `${prefix}${addZero(number, leadingZeros + 1)}${suffix}`.trim()
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
