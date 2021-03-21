<template lang="pug">
  .alert
    iframe.iframe.gifmagazine-embed(
      src="https://gifmagazine.net/embed/glp/3899587"
      width="300" height="168" 
      frameBorder="0" 
      allowFullScreen
      )
    .overLayer
      .wrapper
        h2 来客です
        .columns
          vs-button(@click="sendZaitakuMsg" size="xl") 玄関へ出る
          vs-button(@click="sendFuzaiMsg" size="xl" dark) 無視する
      p.gifLink
        a(href="https://gifmagazine.net/post_images/3899587" target="_blank") via GIFMAGAZINE

</template>
<script>
import {mapState} from 'vuex';
import { w3cwebsocket } from 'websocket'
const W3CWebSocket = w3cwebsocket

export default {
  layout: 'layoutAlert',
  data() {
    return {
      socket: new W3CWebSocket('ws://hack.inatatsu.com:8000'),
      setTime: 20,
      zaitakuMsg: {
        method: 'PROXY',
        from: 'APP',
        select: '1'
      },
      fuzaiMsg: {
        method: 'PROXY',
        from: 'APP',
        select: '2'
      },
      data: {},
    }
  },
  computed: {
    ...mapState(['socketData']),
  },
  methods: {
    sendZaitakuMsg() {
      // ボタン押下でサーバに値を送る
      this.socket.send(JSON.stringify(this.zaitakuMsg))
      this.$router.push('/')
    },
    sendFuzaiMsg() {
      this.socket.send(JSON.stringify(this.fuzaiMsg))
      this.$router.push('/')
    }
  }
}
</script>
<style lang="scss" scoped>
.alert {
  position: relative;
  height: 100%;
}
.iframe {
  background: #000;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
}
.overLayer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 32px 24px;
}
.columns {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 8px;
}
.wrapper {
  text-align: center;
  color: #fff;
}

.gifLink {
  position: absolute;
  bottom: 16px;
  right: 0;
  left: 0;
  margin: auto;
  text-align: center;
}
a {
  color: rgb(96, 170, 255);
}
</style>