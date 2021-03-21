<template lang="pug">
  .container
    Header(:title="'Home'" :link="null" :icon="'home'").header
    .wrapper
      vs-button(to="/settings" size="large" border)
        i.bx.bx-cog
        | 設定
    .wrapper
      .text-wrapper
        small テストツール
      .columns
        vs-button(transparent @click="checkInHome()") 在宅確認
        vs-button(transparent @click="forceSiren()") サイレン
    vs-dialog(width="550px" not-center v-model="isCheckInHomeDialogShowed")
      template(#header)
        h3 来客です
      .con-content
        p(v-if="socketData.visitor") 玄関に {{socketData.visitor}} が来ています。
        p サイレンまで {{this.sec}} 秒前
      template(#footer)
        .con-footer
          vs-button(@click="sendZaitakuMsg" transparent) 玄関へ出る
          vs-button(@click="sendFuzaiMsg" dark transparent) 無視する
</template>
<script>
import Header from '~/components/Header.vue'

import { w3cwebsocket } from 'websocket'
const W3CWebSocket = w3cwebsocket

export default {
  components: {
    Header,
  },
  data() {
    return {
      socket: new W3CWebSocket('ws://hack.inatatsu.com:8000'),
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
      socketData: {},
      isCheckInHomeDialogShowed: false,
      setTime: 10,
      sec: 0,
      timerOn: false,
      timerObj: null
    }
  },
  watch: {
    socketData(val) {
      if (val.target === 'DOOR') return
      this.$store.commit('setSocketData')
      if (val.message === '在宅確認') {
        this.checkInHome()
      }
      if (val.message === 'サイレン') {
        this.forceSiren()
      }
    },
    isCheckInHomeDialogShowed(val) {
      if (!val) {
        this.timerStop()
      }
    }
  },
  created() {
    const self = this
    self.socket.onmessage = function(e) {
      if (e.data.charAt(0) !== '{') return
      if (typeof e.data === 'string') {
        self.socketData = JSON.parse(e.data)
        console.log(e)
      }
    }
  },
  methods: {
    sendZaitakuMsg() {
      this.isCheckInHomeDialogShowed = false
      this.socket.send(JSON.stringify(this.zaitakuMsg))
    },
    sendFuzaiMsg() {
      this.isCheckInHomeDialogShowed = false
      this.socket.send(JSON.stringify(this.fuzaiMsg))
    },
    checkInHome() {
      this.isCheckInHomeDialogShowed = true
      this.sec = this.setTime
      this.timerStart()
    },
    timerStart() {
      let self = this;
      this.timerObj = setInterval(function() {self.timerCount()}, 1000)
      this.timerOn = true; //timerがOFFであることを状態として保持
    },
    timerStop() {
      clearInterval(this.timerObj)
      this.timerOn = false;
    },
    timerCount() {
      if(this.sec <= 0) {
        clearInterval(this.timerObj)
        this.sec = this.setTime
        this.forceSiren()
      } else {
        this.sec--
      }
    },
    forceSiren() {
      this.$router.push('/alert')
    }
  }
}
</script>
<style lang="scss" scoped>

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: normal;
}

.subtitle {
  font-weight: 300;
  font-size: 1.1rem;
  color: #526488;
  word-spacing: 2px;
  padding-bottom: 15px;
  max-width: 600px;
}

.subtitle a {
  font-weight: 500;
  color: inherit;
}

.links {
  padding-top: 15px;
  margin-bottom: 20px;
}

.content-logos {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 500px;
}

.plus {
  font-size: 2.5rem;
  margin: 15px;
  color: #35495e;
}

.h3 {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-weight: 400;
  margin: 10px;
}

.bx-cog {
  margin-right: 4px;
}

.wrapper {
  margin-bottom: 24px;
  padding: 0 20px;
}
.text-wrapper {
  padding: 0 6px;
}
.columns {
  display: flex;
}
.con-footer {
  display: flex;
  justify-content: flex-end;
}
</style>
