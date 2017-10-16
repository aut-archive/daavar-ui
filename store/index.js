export const state = () => ({
  drawer: true
})

export const mutations = {
  DRAWER_TOGGLE (state) {
    state.drawer = !state.drawer
  },
  DRAWER_SET (state, value) {
    state.drawer = value
  }
}
