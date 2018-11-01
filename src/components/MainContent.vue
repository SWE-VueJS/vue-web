<template>
  <div class="wrap-main-content">
    <Services />
    <Portfolio />
    <About />
    <Team />
    <Clients />
    <Contact />
    <Popup :popup-data="PortfolioData" />
  </div>
</template>
<script>
  import Services from '@/components/Services'
  import Portfolio from '@/components/Portfolio'
  import About from '@/components/About'
  import Team from '@/components/Team'
  import Clients from '@/components/Clients'
  import Contact from '@/components/Contact'
  import Popup from '@/components/Popup'
  import PortfolioData from '@/modelData/PortfolioData'
  export default{
    data(){
      return {
        PortfolioData
      }
    },
    components:{Services, Portfolio, About, Team, Clients, Contact, Popup}
  }
</script>