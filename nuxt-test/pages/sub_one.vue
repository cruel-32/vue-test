<template>
  <section class="container">
    <div>
      <app-logo/>
      <h1 class="title">
        nuxt-test
      </h1>
      <h2 class="subtitle">
        Nuxt.js project
      </h2>
      <div class="links">
        <a
          href="/"
          class="button--green">home</a>
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green">Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey">GitHub</a>
      </div>
      <div>
        {{user}}
      </div>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import axios from 'axios';

export default {
  //asyncData은 비동기로 데이터를 긁어온뒤에 페이지를 렌더링함...
  //기존 서버사이드 렌더링처럼 spa 대비 초기 화면 로드가 느리다는 단점이 있음.
  //하지만 한번 로드 이후로는 캐싱이 먹어서인지 빠름...
  async asyncData ({ params, error }) {
    const {data} = await axios.get('http://localhost:4000/user'); 
    const {dummy } = await new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve({
          dummy : {
            dummyNumber : 3000,
            dummyName : 'abcd',
          }
        })
      },5000)
    })
    console.log('data : ', data);
    console.log('dummy : ', dummy);
    return {
      user : Object.assign(dummy,data)
    }
  },
  components: {
    AppLogo
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

