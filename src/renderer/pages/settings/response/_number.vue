<template lang="pug">
.number
  header.header
    Header(:title="`番号${$route.params.number}`" :link="'/settings/response'" :icon="'back'")
    Breadcrumb(:items="breadcrumb")
  .container
    p {{$route.params.number}}
    
</template>
<script>
import Header from '~/components/Header.vue'
import Breadcrumb from '~/components/breadcrumb.vue'

export default {
  components: {
    Header,
    Breadcrumb
  },
  data() {
    return{
      responses: [
        {
          number: 1,
          text: '知人',
          sounds: '知人の方は'
        },
        {
          number: 2,
          text: 'その他',
          sounds: 'そうでない方は'
        }
      ],
      breadcrumb: [
        {
          name: '設定',
          link: '/settings',
          active: false
        },
        {
          name: '応対',
          link: '/settings/response',
          active: false
        },
        {
          name: `番号${this.$route.params.number}`,
          link: `/settings/response/${this.$route.params.number}`,
          active: false
        }
      ]
    }
  }
}
</script>