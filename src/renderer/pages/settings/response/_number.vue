<template lang="pug">
.number
  header.header
    Header(:title="`番号${$route.params.number}：${responseOneId.text}`" :link="'/settings/response'" :icon="'back'")
    Breadcrumb(:items="breadcrumb")
  .container
    .wrapper
      vs-input(:value="responseOneId.text" @change="updateResponseOneIdText" placeholder="属性")
      vs-input(:value="responseOneId.sounds" @change="updateResponseOneIdSounds" placeholder="音声案内")
        template(#icon): i.bx.bx-user-voice
      .con-switch
        span さらに条件分岐する
        vs-switch(v-model="moreBranch").switch
    .wrapper
      span 応対を設定する
      vs-select(placeholder="Select" v-model="value")
        vs-option(label="Vuesax" value="1")
</template>
<script>
import Header from '~/components/Header.vue'
import Breadcrumb from '~/components/breadcrumb.vue'
import {mapState} from 'vuex';

export default {
  components: {
    Header,
    Breadcrumb
  },
  computed: {
    ...mapState(['responseArr']),
    responseOneId() {
      const number = Number(this.$route.params.number)
      const responses = this.$store.state.responseArr
      const responseOneId = responses.find((x) => {
        return x.number === number
      }) 
      return responseOneId
    },
  },
  methods: {
    updateResponseOneIdText(e) {
      // text update
      const newResponse = {...this.responseOneId}
      newResponse.text = e.target.value
      // this.$store.commit('updateMessage', newResponse)
    },
    updateResponseOneIdSounds(e) {
      // sound text update
      // this.$store.commit('updateMessage', e.target.value)
    },
    updateResponseOneIdSounds(e) {
      // sound text update
      // this.$store.commit('updateMessage', e.target.value)
    }
  },
  data() {
    return{
      moreBranch: false,
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

<style lang="scss" scoped>
.wrapper {
  padding: 0 25px;
}
.switch {
  display: inline-flex;
}
</style>