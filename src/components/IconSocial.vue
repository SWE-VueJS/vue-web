<template>
  <div class="wrap-icon-social">
        <ul class="list-inline social-buttons">
            <li class="list-inline-item" v-for="(item,index) in dataIcon" :key="index">
                <a :href="item.href">
                    <i class="fab" v-bind:class="item.icon"></i>
                </a>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        name: 'IconSocial',
        data(){
            return {
                dataIcon: [
                    {
                        href: 'https://www.facebook.com/huynh.trongdai',
                        icon: 'fa-twitter'
                    },
                    {
                        href: 'https://www.facebook.com/huynh.trongdai',
                        icon: 'fa-facebook-f'
                    },
                    {
                        href: 'https://www.facebook.com/huynh.trongdai',
                        icon: 'fa-linkedin-in'
                    }
                ]
            }
        }
    }
</script>
