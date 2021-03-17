<template lang="pug">
  .container
    vs-row.columns
      vs-col(vs-type="flex" vs-justify="center" vs-align="center" w="1")
        vs-button(icon border :to="link" v-if="link").icon-button
          i.bx.bx-arrow-back(v-if="icon === 'back'")
        vs-button(icon border v-if="!link" disabled).icon-button
          i.bx.bx-cog(v-if="icon === 'cog'")
      vs-col(vs-type="flex" vs-justify="center" vs-align="center" w="11")
        h2.title {{title}}
</template>
<script>
import breadcrumb from '~/components/breadcrumb.vue'

export default {
  components: {
    breadcrumb
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: 'back'
    },
    link: {
      type: String,
      default: '/'
    }
  },
  data() {
    return {
      breadcrumb: [
        {
          title: 'Dashboard',
          url: 'dashboard'
        },
        {
          title: 'Link 1',
          url: 'link-1'
        },
        {
          title: 'Link 2',
          disabled: true
        },
        {
          title: 'Active',
          active: true
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>

.columns {
  display: flex;
  align-items: center !important;
  padding: 0 20px;
}

.icon-button {
  border: none;
  width: 38px;
  height: 38px;
  margin-right: 16px;
}

.header-page.fixed .header__content:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%);
  width: 110%;
  height: 100%;
  z-index: -1;
  box-shadow: 0 25px 20px -25px rgba(0,0,0,0.1);
}
</style>