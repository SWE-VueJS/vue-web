<template>
  <div id="app">
    <div class="wrap-all">
          <Navigation />
          <Header />
          <MainContent />
          <Footer />
    </div><!--end wrap-all-->
  </div><!--end app-->
</template>

<script>
  import Navigation from '@/components/Navigation'
  import Header from '@/components/Header'
  import MainContent from '@/components/MainContent'
  import Footer from '@/components/Footer'
  export default{
    components:{Navigation, Header, MainContent, Footer}
  }
</script>
