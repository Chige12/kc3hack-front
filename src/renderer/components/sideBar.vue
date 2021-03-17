<template lang="pug">
  .hidden
    vs-sidebar(absolute hover-expand reduce v-model="pageTitle" open).vs-sidebar-content
      template(#left) Settings
      vs-sidebar-item(:active="pageTitle == 'index'" id="index" to="/") 
        template(#icon)
          i.bx.bx-home
        p Home
      vs-sidebar-group
        template(#header)
          vs-sidebar-item(arrow :active="pageTitle == 'settings'" id="settings" to="/settings")
            template(#icon)
              i.bx.bx-cog
            p 設定
        vs-sidebar-item(:active="pageTitle == 'settings-response'" id="settings-response" to="/settings/response")
          template(#icon)
            i.bx.bx-list-ol
          p 応対
        vs-sidebar-item(:active="pageTitle == 'settings-notification'" id="settings-notification" to="/settings/notification")
          template(#icon)
            i.bx.bx-bell
          p 通知
</template>
<script>
export default {
  watch: {
    '$route': function(to, from) {
      //遷移元と遷移先のパスが違った場合に発火する
      if(to.path !== from.path) {
        this.pageTitle = $nuxt.$route.name
        console.log(this.pageTitle)
      }
    }
  },
  data() {
    return{
      pageTitle: $nuxt.$route.name
    }
  }
}
</script>
<style lang="scss" scoped>
.vs-sidebar-content {
  background: rgba(#fff, 0.95);
}
</style>