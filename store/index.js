const initialState = () => ({
  preFetchedString: ''
})

export const state = initialState

export const mutations = {
  setPreFetchedString (state, value) {
    state.preFetchedString = value
  }
}

export const actions = {
  async nuxtServerInit ({commit}) {
    const response = await this.app.$axios.$get('https://jsonplaceholder.typicode.com/posts/1')
    commit('setPreFetchedString', response.body)
  }
}
