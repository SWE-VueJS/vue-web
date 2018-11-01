<template>
  <div class="wrap-clients">
      <!-- Clients -->
    <section class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-md-3 col-sm-6" v-for="(item, index) in dataClients" :key="index">
            <a :href="item.href">
              <img class="img-fluid d-block mx-auto" :src="item.srcIMG" alt="">
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
  export default {
    name: 'Clients',
    data(){
      return {
        dataClients: [
          {
            href: 'https://vuejs.org/',
            srcIMG: '/assets/img/logos/envato.jpg'
          },
          {
            href: 'https://vuejs.org/',
            srcIMG: '/assets/img/logos/designmodo.jpg'
          },
          {
            href: 'https://vuejs.org/',
            srcIMG: '/assets/img/logos/themeforest.jpg'
          },
          {
            href: 'https://vuejs.org/',
            srcIMG: '/assets/img/logos/creative-market.jpg'
          }
        ]
      }
    }
  }
</script>
