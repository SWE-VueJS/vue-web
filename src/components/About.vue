<template>
  <div class="wrap-about">
    <section id="about">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
              <Title title-id='3'/>
           </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <ul class="timeline">
              <li v-for="(item, index) in dataAbouts" :key="index" :class="[index % 2 !== 0 ? 'timeline-inverted': '']">
                <div class="timeline-image">
                  <img class="rounded-circle img-fluid" :src="item.scrIMG" alt="">
                </div>
                <div class="timeline-panel">
                  <div class="timeline-heading">
                    <h4>{{item.datePost}}</h4>
                    <h4 class="subheading">{{item.Title}}</h4>
                  </div>
                  <div class="timeline-body">
                    <p class="text-muted">{{item.description}}</p>
                  </div>
                </div>
              </li>
            </ul>
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
    name: 'About',
    data(){
      return {
        dataAbouts: [
          {
            scrIMG: '/assets/img/about/1.jpg',
            datePost: '2009-2011',
            title: 'Our Humble Beginnings',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!'
          },
          {
            scrIMG: '/assets/img/about/2.jpg',
            datePost: 'March 2011',
            title: 'An Agency is Born',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!'
          },
          {
            scrIMG: '/assets/img/about/3.jpg',
            datePost: 'December 2012',
            title: 'Transition to Full Service',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!'
          },
          {
            scrIMG: '/assets/img/about/4.jpg',
            datePost: 'July 2014',
            title: 'Phase Two Expansion',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!'
          },
          {
            title: 'Be Part Of Our Story!'
          }
        ]
      }
    }
  }
</script>
