<template>
  <div class="wrap-portfolio">
    <section class="bg-light" id="portfolio">
      <div class="container">
        <div class="row">
           <div class="col-lg-12 text-center">
              <Title title-id='2'/>
           </div>
        </div>
        <div class="row">
          <div class="col-md-4 col-sm-6 portfolio-item" v-for="(item, index) in PortfolioData" :key="index">
            <a class="portfolio-link" data-toggle="modal" :href="item.href">
              <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                  <i class="fas fa-plus fa-3x"></i>
                </div>
              </div>
              <img class="img-fluid" :src="item.srcURl.thumbIMG" alt="">
            </a>
            <div class="portfolio-caption">
              <h4>{{item.projectName}}</h4>
              <p class="text-muted">{{item.cateName}}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
     <PortfolioModal />
  </div>
</template>
<script>
  import Title from '@/components/Title'
  import PortfolioModal from '@/components/PortfolioModal'
  import PortfolioData from '@/modelData/PortfolioData'
  export default {
    name: 'Portfolio',
    components: {Title, PortfolioModal},
    data(){
      return{
        PortfolioData
      }
    }
  }
</script>
