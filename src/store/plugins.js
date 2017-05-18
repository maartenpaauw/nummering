import createPersistedState from 'vuex-persistedstate'

export const plugins = []

if (process.env.NODE_ENV === 'production') {
  plugins.push(createPersistedState())
}
