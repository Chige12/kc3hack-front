<template lang="pug">
  .container
    .row
      .col.col-icon(vs-type="flex" vs-justify="left" vs-align="center" w="1")
        vs-button(icon border :to="link" v-if="link").icon-button
          i.bx.bx-arrow-back(v-if="icon === 'back'")
        vs-button(icon border v-if="!link" disabled).icon-button
          i.bx.bx-cog(v-if="icon === 'cog'")
          i.bx.bx-home(v-if="icon === 'home'")
      .col(vs-type="flex" vs-justify="left" vs-align="center" w="11")
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

.row {
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  padding: 0 20px;
}

.col-icon {
  flex-shrink: 0;
}

.icon-button {
  border: none;
  width: 38px;
  height: 38px;
  margin-right: 24px;
  &:disabled {
    opacity: 1;
  }
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