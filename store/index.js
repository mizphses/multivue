export const state = () => ({
  usercsvs: [],
})

export const mutations = {
  add(state, input) {
    state.usercsvs.push(input)
  },
  remove(state, { usercsvs }) {
    state.usercsvs.splice(state.usercsvs.indexOf(usercsvs), 1)
  },
}
