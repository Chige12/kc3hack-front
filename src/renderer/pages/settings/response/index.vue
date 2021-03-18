<template lang="pug">
.index
  header.header
    Header(:title="'応対'" :link="'/settings'" :icon="'back'")
    Breadcrumb(:items="breadcrumb")
  .container
    .grid
      .list-item(v-for="res in responses" :key="res.text")
        vs-button(transparent block size="xl" :to="`/settings/response/${res.number}`").list-button
          .list-item-columns
            .list-item-number(vs-type="flex" vs-justify="center" vs-align="center" w="3")
              .number-box {{res.number}}
              span を押した場合
            .list-item-text(vs-type="flex" vs-justify="center" vs-align="center" w="9") {{res.text}}
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
      responses: [
        {
          number: 1,
          text: '知人',
          sounds: '知人の方は'
        },
        {
          number: 2,
          text: 'その他',
          sounds: 'そうでない方は'
        }
      ],
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
        }
      ]
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
  .list-item-columns {
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
    text-align: left;
    color: rgb(30,30,30);
  }
  .list-item-number {
    max-width: 200px;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    flex-shrink: 0;
    color: rgba(30,30,30, 0.8);
    padding-right: 32px;
  }
  .number-box {
    width: 38px;
    height: 38px;
    text-align: center;
    line-height: 36px;
    border: 2px solid rgba(30,30,30, 0.3);
    border-radius: 12px;
    margin-right: 8px;
  }
</style>