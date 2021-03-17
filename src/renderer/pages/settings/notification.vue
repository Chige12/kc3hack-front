<template lang="pug">
.notification
  header.header
    Header(:title="'通知'" :link="'/settings'" :icon="'back'")
    Breadcrumb(:items="breadcrumb")
  .container
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
    return {
      breadcrumb: [
        {
          name: '設定',
          link: '/settings',
          active: false
        },
        {
          name: '通知',
          link: '/settings/notification',
          active: false
        }
      ]
    }
  }
}
</script>