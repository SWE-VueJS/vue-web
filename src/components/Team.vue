<template>
  <div class="wrap-team">
    <section class="bg-light" id="team">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
              <Title title-id='4'/>
           </div>
        </div>
        <div class="row">
          <div class="col-sm-4" v-for="(item, index) in dataAbout.dataForm" :key="index">
            <div class="team-member">
                <a class="portfolio-link" data-toggle="modal" :href="item.href">
                  <img class="mx-auto rounded-circle" :src="item.avataSRC" alt="">
                </a>
              <h4>{{item.fullName}}</h4>
              <p class="text-muted">{{item.position}}</p>
              <IconSocial/>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-8 mx-auto text-center">
              <p class="large text-muted">{{dataAbout.dataDes}}</p>  
          </div>
        </div>
      </div>
      <ProfileModal />
    </section>
  </div>
</template>
<script>
  import Title from '@/components/Title'
  import IconSocial from '@/components/IconSocial'
  import ProfileModal from '@/components/ProfileModal'
  import dataAbout from '@/modelData/TeamData'
  export default {
    components: {Title, IconSocial, ProfileModal},
    name: 'Team',
    data(){
      return {
        dataAbout
      }
    }
  }
</script>
