export const defaultState = {
  file_name: 'reeks.csv',
  header: 'Nummer',
  start: 1,
  end: 10,
  step: 1,
  prefix: 'No. ',
  suffix: '',
  leading_zeros: 5
}

const settings = {
  file_name: {
    label: 'Bestandsnaam',
    type: 'text',
    placeholder: 'Bestandsnaam',
    value: defaultState.file_name
  },
  header: {
    label: 'kolomnaam',
    type: 'text',
    placeholder: 'Kolomnaam',
    value: defaultState.header
  },
  start: {
    label: 'Begingetal',
    type: 'number',
    placeholder: 'Begingetal',
    value: defaultState.start
  },
  end: {
    label: 'Eindgetal',
    type: 'number',
    placeholder: 'Eindgetal',
    value: defaultState.end
  },
  step: {
    label: 'Aantal stappen',
    type: 'number',
    placeholder: 'Aantal stappen',
    value: defaultState.step
  },
  prefix: {
    label: 'Voor het getal',
    type: 'text',
    placeholder: 'Voor het getal',
    value: defaultState.prefix
  },
  suffix: {
    label: 'Na het getal',
    type: 'text',
    placeholder: 'Na het getal',
    value: defaultState.suffix
  },
  leading_zeros: {
    label: 'Leidende nullen',
    type: 'number',
    placeholder: 'Leidende nullen',
    value: defaultState.leading_zeros
  }
}

const visible = {
  menu: false,
  about: false,
  message: true
}

export const state = {
  settings,
  visible
}
