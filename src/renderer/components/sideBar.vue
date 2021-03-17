<template lang="pug">
  .hidden
    vs-sidebar(absolute hover-expand reduce v-model="active" open)
      template(#left) Settings
      vs-sidebar-item(:active="active == 'home'" id="home" :to="`/`") 
        template(#icon)
          i.bx.bx-home
        | Home
      vs-sidebar-item(:active="active == 'settings'" id="settings" :to="`/settings`")
        template(#icon)
          i.bx.bx-home
        | Settings
</template>
<script>
export default {
  data() {
    return{
      active: 'home'
    }
  }
}
</script>