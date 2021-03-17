<template lang="pug">
  div
    sideBar

</template>
<script>
import sideBar from '~/components/sideBar.vue'
export default {
  components: {
    sideBar
  },
  data() {
    return{
      active: 'settings'
    }
  }
}
</script>