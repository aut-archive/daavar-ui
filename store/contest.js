export const state = () => ({
  all: {}, // _id: <Contest>
  current: null
})

export const mutations = {
  SET_ALL (state, contests) {
    state.all = contests
  },
  SET (state, contest) {
    state.current = contest
  }
}

export const actions = {
  async FETCH_ALL ({ commit }) {
    const contests = await this.$axios.$get('contests')
    commit('SET_ALL', contests)
  },
  async FETCH ({ commit }) {
    const contest = await this.$axios.$get('contest')
    commit('SET', contest)
  }
}
