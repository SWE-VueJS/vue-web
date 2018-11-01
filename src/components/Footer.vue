<template>
  <div class="wrap-footer">
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <span class="copyright" v-html="copyRight"></span>
          </div>
          <div class="col-md-4">
              <IconSocial/>
          </div>
          <div class="col-md-4">
            <ul class="list-inline quicklinks">
              <li class="list-inline-item" v-for="(item, index) in dataFooters" :key="index">
                <a href="#">{{item}}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
  import IconSocial from '@/components/IconSocial' 
  export default {
    components: {IconSocial},
    name: 'Footer',
    data(){
      return {
        copyRight: 'Copyright &copy; Your Website 2018',
        dataFooters: ['Privacy Policy','Terms of Use']
      }
    }
  }
</script>
