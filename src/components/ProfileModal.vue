<template>
    <div class="wrap-model">
        <div class="portfolio-modal modal fade" tabindex="-1" role="dialog" aria-hidden="true" v-for="(item, index) in dataAbout.dataForm" :key="index"  :id="item.id">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="close-modal" data-dismiss="modal">
                        <div class="lr">
                            <div class="rl"></div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-8 mx-auto">
                                <div class="modal-body">
                                <h2 class="text-uppercase">{{item.fullName}}</h2>
                                <p class="item-intro text-muted">{{item.position}}</p>
                                <img class="img-fluid d-block mx-auto" :src="item.avataSRC" alt="">
                                <p>{{item.description}}</p>
                                <IconSocial/>
                                <button class="btn btn-primary" data-dismiss="modal" type="button">
                                    <i class="fas fa-times"></i>
                                    {{item.closed}}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import IconSocial from '@/components/IconSocial'
    import dataAbout from '@/modelData/TeamData'
    export default {
        components: {IconSocial},
        name: 'ProfileModal',
        data(){
            return {
                dataAbout
            }
        }
    }
</script>