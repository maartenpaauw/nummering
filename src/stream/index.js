import { defaultState } from '../store/state'

export default function stream (range, header = defaultState.header, filename = defaultState.filename) {
  let link = document.createElement('a')
  document.body.appendChild(link)
  link.download = filename
  link.href = `data:application/octet-stream,
               ${encodeURIComponent(header + '\r\n')}
               ${encodeURIComponent(range.join('\r\n'))}`
  link.click()
  document.body.removeChild(link)
}
