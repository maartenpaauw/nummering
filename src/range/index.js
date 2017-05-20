import _ from 'lodash'
import addZero from 'add-zero'

export default function generate (start, end, step, prefix, leadingZeros, suffix) {
  return _.map(_.range(start, (end + 1), step), (number) => {
    return `${prefix}${addZero(number, leadingZeros + 1)}${suffix}`.trim()
  })
}
