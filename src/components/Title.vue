<template>
  <div class="wrap-title">
    <div class="title" v-for="(item, index) in dataTitle" :key="index" >
        <template v-if="item.id == titleId">
            <h2 class="section-heading text-uppercase">{{item.title}}</h2>
            <h3 class="section-subheading text-muted">{{item.description}}</h3>
        </template>
    </div>
  </div>
</template>
<script>
    export default {
        name: 'Title',
        props:['titleId'],
        data: function(){
            return{
                dataTitle: [
                    {
                        id: 1,
                        title: 'Service',
                        description: 'Lorem ipsum dolor sit amet consectetur.'
                    },
                    {
                        id: 2,
                        title: 'Fortfolio',
                        description: 'Lorem ipsum dolor sit amet consectetur.'
                    },
                    {
                        id: 3,
                        title: 'About',
                        description: 'Lorem ipsum dolor sit amet consectetur.'
                    },
                    {
                        id: 4,
                        title: 'Our amazing team',
                        description: 'Lorem ipsum dolor sit amet consectetur.'
                    },
                    {
                        id: 5,
                        title: 'Contact us',
                        description: 'Lorem ipsum dolor sit amet consectetur.'
                    }
                ]
            }
        }
    }
</script>
