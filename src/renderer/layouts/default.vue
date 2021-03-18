<template lang="pug">
  div
    sideBar
    .sidebar-padding
      Nuxt
</template>
<script>
import sideBar from '~/components/sideBar.vue'
export default {
  components: {
    sideBar
  }
}
</script>
<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background: #fff;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

a {
  text-underline-position: under;
}

.sidebar-padding {
  padding-left: 50px;
}

.container {
  margin: auto;
  width: 100%;
  max-width: 1024px;
  padding: 0 24px;
}

.header {
  padding: 48px 0 32px;
}
</style>
