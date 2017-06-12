import { values } from '@/settings'

export default function stream (range, header = values.header, filename = values.filename) {
  const data = []
  const a = document.createElement('a')
  filename = filename + '.csv'
  const properties = {
    'Content-Type': 'text/csv',
    'charset': 'UTF-8'
  }
  let file
  data.push(header + '\r\n')
  data.push(range.join('\r\n'))
  try {
    file = new File(data, filename, properties)
  } catch (e) {
    file = new Blob(data, properties)
  }
  document.body.appendChild(a)
  a.setAttribute('href', window.URL.createObjectURL(file))
  a.setAttribute('download', filename)
  a.click()
  document.body.removeChild(a)
}
