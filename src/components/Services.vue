<template>
  <div class="wrap-service">
    <section id="services">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
              <Title title-id='1'/>
           </div>
        </div>
        <div class="row text-center">
          <div class="col-md-4" v-for="(item, index) in dataServices" :key="index">
            <span class="fa-stack fa-4x">
              <i class="fas fa-circle fa-stack-2x text-primary"></i>
              <i class="fas fa-stack-1x fa-inverse" v-bind:class="item.icon"></i>
            </span>
            <h4 class="service-heading">{{item.title}}</h4>
            <p class="text-muted">{{item.description}}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
  import Title from '@/components/Title'
  export default {
    components: {Title},
    name: 'Services',
    data: function() {
      return {
      dataServices: [
        {
          title: 'E-Commerce',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.',
          icon: 'fa-shopping-cart'
        },
        {
          title: 'Responsive Design',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.',
          icon: 'fa-laptop'
        },
        {
          title: 'Web Security',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.',
          icon: 'fa-lock'
        }
      ]
    }
  }
}
</script>