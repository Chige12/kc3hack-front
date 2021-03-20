<template lang="pug">
.number
  header.header
    Header(:title="`番号${$route.params.number}：${responseOne.text}`" :link="'/settings/response'" :icon="'back'")
    Breadcrumb(:items="breadcrumb")
  .container
    .wrapper
      vs-row.input
        vs-col(vs-type="flex" vs-justify="center" vs-align="center" w="3")
          p 遷移の名称
        vs-col(vs-type="flex" vs-justify="center" vs-align="center" w="9")
          vs-input(:value="responseOne.text" @change="updateResponseOneText" placeholder="属性")
      vs-row.input
        vs-col(vs-type="flex" vs-justify="center" vs-align="center" w="3")
          p 発話音声
        vs-col(vs-type="flex" vs-justify="center" vs-align="center" w="3")
          vs-input(:value="responseOne.sounds" @change="updateResponseOneSounds" placeholder="音声案内")
            template(#icon): i.bx.bx-user-voice
        vs-col(vs-type="flex" vs-justify="center" vs-align="center" w="6")
          span.number-button {{$route.params.number}}
          span.number-button-sub を
      //- .con-switch
        span さらに条件分岐する
        vs-switch(v-model="moreBranch").switch
    .wrapper
      vs-row.input
        vs-col(vs-type="flex" vs-justify="center" vs-align="center" w="3")
          p 応対を設定する
        vs-col(vs-type="flex" vs-justify="center" vs-align="center" w="9")
          vs-select(placeholder="Select" :value="responseOne.type" @input="updateResponseOneType")
            vs-option(v-for="resType in responseTypes" :key="resType.type" :label="resType.name" :value="resType.type") {{resType.name}}
</template>
<script>
import Header from '~/components/Header.vue'
import Breadcrumb from '~/components/breadcrumb.vue'
import {mapState} from 'vuex';
import {cloneDeep} from 'lodash';

export default {
  components: {
    Header,
    Breadcrumb
  },
  computed: {
    ...mapState(['responseArr']),
    responses() {
      return cloneDeep(this.$store.state.responseArr)
    },
    responseOne() {
      const number = Number(this.$route.params.number)
      const responseOne = this.responses.find((x) => {
        return x.number === number
      }) 
      return responseOne
    },
    responseOneIndex() {
      const number = Number(this.$route.params.number)
      const responseOneIndex = this.responses.findIndex((x) => {
        return x.number === number
      })
      return responseOneIndex
    },
  },
  methods: {
    updateResponseOneText(e) {
      // text update
      this.responses[this.responseOneIndex].text = e.target.value
      this.$store.commit('updateResponse', this.responses)
    },
    updateResponseOneSounds(e) {
      // sound text update
      this.responses[this.responseOneIndex].sounds = e.target.value
      this.$store.commit('updateResponse', this.responses)
    },
    updateResponseOneType(value) {
      // type update
      this.responses[this.responseOneIndex].type = value
      this.$store.commit('updateResponse', this.responses)
    }
  },
  data() {
    return{
      responseTypes: [
        {
          type: 'check',
          name: '在宅確認する',
        },
        {
          type: 'gohome',
          name: '撃退する',
        },
        {
          type: 'apologize',
          name: '不在通知する',
        },
        {
          type: 'siren',
          name: '即サイレン！！',
        }
      ],
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
.input {
  margin: 16px 0;
  align-items: center !important;
}
.number-button {
  display: inline-block;
  width: 28px;
  height: 28px;
  border: 1px solid #aaa;
  line-height: 26px;
  text-align: center;
  margin-right: 4px;
  border-radius: 8px;
  color: #555;
  &-sub {
    color: #555;
  }
}
</style>