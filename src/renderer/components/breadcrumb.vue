<template lang="pug">
  .container
    nav.breadcrumb
      ol.breadcrumb--ol
        li(v-for="(bc, bcIndex) in items" :key="bc.link")
          nuxt-link.breadcrumb--link(v-if="bcIndex !== items.length - 1" :to="bc.link") {{bc.name}}
          span.breadcrumb--active(v-if="bcIndex === items.length - 1") {{bc.name}}
          span.breadcrumb--separator(v-if="bcIndex !== items.length - 1") /
</template>
<script>
export default {
  props: {
    items: {
      type: Array,
      default: []
    }
  },
}
</script>
<style lang="scss" scoped>
@import '~assets/variables.scss';

.breadcrumb--ol {
  display: flex;
  flex-wrap: wrap;
  padding: 15px 25px;
  list-style-type: none;
  li {
    .breadcrumb--link {
      transition: all .2s ease;
      color: rgba(0,0,0,.4);
    }
    .breadcrumb--active {
      color: $blue;
    }
    .breadcrumb--separator {
      margin: 0 8px;
    }
  }
}
</style>