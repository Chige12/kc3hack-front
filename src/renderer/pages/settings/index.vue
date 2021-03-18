<template lang="pug">
.index
  header.header
    Header(:title="'設定'" :link="null" :icon="'cog'")
  .container
    .grid
      vs-button(transparent block size="xl" to="/settings/response").list-button
        .list-item
          .col(vs-type="flex" vs-justify="center" vs-align="center" w="1")
            vs-avatar: i.bx.bx-list-ol
          .col(vs-type="flex" vs-justify="center" vs-align="center" w="11") 応対
      vs-button(transparent block size="xl" to="/settings/notification").list-button
        .list-item
          .col(vs-type="flex" vs-justify="center" vs-align="center" w="1")
            vs-avatar: i.bx.bx-bell
          .col(vs-type="flex" vs-justify="center" vs-align="center" w="11") 通知
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
      setting: 'settings'
    }
  }
}
</script>
<style lang="scss" scoped>
  .list-button {
    &::before {
      transform: scale(1);
    }
  }
  .list-item {
    width: 100%;
    text-align: left;
    color: rgb(30,30,30);
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .col {
    padding-right: 20px;
  }
</style>