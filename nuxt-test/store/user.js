export const state = () => ({
  user: '남자회원'
})

export const mutations = {
  setUser (state) {
    console.log('state.user : ', state.user);
  }
}