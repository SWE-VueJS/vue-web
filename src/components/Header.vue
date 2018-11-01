<template>
  <div class="wrap-header">
    <div class="masthead">
      <div class="container">
        <div class="intro-text">
            <div class="intro-lead-in">{{welcome}}</div>
            <div class="intro-heading text-uppercase">{{intro}}</div>
            <slot>
                <a class="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Tell Me More</a>
            </slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Header',
    data(){
      return {
        welcome: 'Welcome To Frontend Dev Master',
        intro: 'Vue.js 2  & Vuex'
      }
    }
  }
</script>


