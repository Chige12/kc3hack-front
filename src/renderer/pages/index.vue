<template lang="pug">
  .container
</template>
<script>
import Logo from '~/components/Logo.vue'
import VuesaxLogo from '~/components/VuesaxLogo.vue'

import { w3cwebsocket } from 'websocket'
const W3CWebSocket = w3cwebsocket

export default {
  components: {
    Logo,
    VuesaxLogo,
  },
  data() {
    return {
      socket: new W3CWebSocket('ws://hack.inatatsu.com:8000'),
      message: {
        method: 'PROXY',
        from: 'DOOR',
        select: '0'
      },
      answer: ''
    }
  },
  created() {
    const self = this
    self.socket.onmessage = function(e) {
      if (typeof e.data === 'string') {
        self.answer = e.data
        console.log(e)
      }
    }
  },
  methods: {
    send() {
      // ボタン押下でサーバに値を送る
      this.socket.send(JSON.stringify(this.message))
    }
  }
}
</script>

<style>

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 55px;
  color: #35495e;
  letter-spacing: 1px;
  text-transform: capitalize;
  margin: 25px 0;
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
</style>
