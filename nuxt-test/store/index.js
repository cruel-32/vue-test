//class mode store 사용방법
// import Vuex from 'vuex'

// const store = () => new Vuex.Store({
//   state: {
//     user: '홍길동'
//   },
//   mutations: {
//     setUser (state, user) {
//       console.log('state : ', state);
//       console.log('user : ', user);
//     }
//   }
// })

// export default store

//module mode store 사용방법
export const state = () => ({
  index : 0
})

export const mutations = {
  indexCounting (state) {
    console.log('state.index : ', state.index);
  }
}